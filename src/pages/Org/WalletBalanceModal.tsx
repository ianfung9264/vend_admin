import React, { useEffect, useState } from "react";
import { Modal, Table, Spin, Tag } from "antd";
import { _getApplicationTransactionsByEventIds } from "@/services/org/info";
import { _getWithdrawalByLandowner } from "@/services/withdrawal/info";

interface WalletBalanceModalProps {
  visible: boolean;
  onClose: () => void;
  record: any;
}

// Helper function for status tags
const getStatusTag = (status: string) => {
  switch (status?.toUpperCase()) {
    case "PAID":
      return <Tag color="green">Accepted & Paid</Tag>;
    case "REFUNDED":
      return <Tag color="purple">Refunded</Tag>;
    case "DENIED":
      return <Tag color="red">Rejected</Tag>;
    case "WAITING":
      return <Tag color="orange">Pending Org Decision </Tag>;
    case "APPROVED_COMPLETED":
      return <Tag color="blue">Completed</Tag>;
    case "APPROVED_PROGRESSING":
      return <Tag color="purple">Progressing</Tag>;
    case "REJECTED":
      return <Tag color="magenta">Rejected</Tag>;
    default:
      return <Tag>{status || "N/A"}</Tag>;
  }
};

const WalletBalanceModal: React.FC<WalletBalanceModalProps> = ({
  visible,
  onClose,
  record,
}) => {
  const [combinedTransactions, setCombinedTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible && record?._id) {
      setLoading(true);
      const landownerId = record._id;
      const eventIds = Array.isArray(record?.events)
        ? record.events.map((e: any) => e._id)
        : [];

      Promise.all([
        _getWithdrawalByLandowner(landownerId),
        eventIds.length > 0
          ? _getApplicationTransactionsByEventIds(eventIds)
          : Promise.resolve([]),
      ])
        .then(([withdrawalRes, applicationRes]) => {
          const withdrawals = (withdrawalRes || []).map((w: any) => ({
            _id: w._id,
            transactionType: "withdrawal",
            event_name: "Withdrawal from Wallet",
            createdAt: w.createdAt,
            amount: w.amount * -1,
            action_type: "Withdrawal",
            description: "N/A",
            status: w.progress,
            originalData: w,
          }));

          const applications = (applicationRes || []).map((a: any) => ({
            _id: a._id,
            transactionType: "application",
            event_name: a.event_name || "Event Payment",
            createdAt: a.createdAt,
            amount: a.ticket_type?.amount || 0,
            action_type: "Payment",
            description: "N/A",
            status: a.stall_payment_status,
            originalData: a,
          }));

          // Combine
          const combined = [...withdrawals, ...applications];

          // Filter out WAITING applications
          const filtered = combined.filter(
            (tx) =>
              !(
                (tx.transactionType === "application" &&
                  tx.status?.toUpperCase() === "WAITING") ||
                tx.status?.toUpperCase() === "ACCEPT" ||
                tx.status?.toUpperCase() === "CANCELLED"
              )
          );

          // Sort by date (newest first)
          const sorted = filtered.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

          setCombinedTransactions(sorted);
          console.log("sort", sorted);
        })
        .finally(() => setLoading(false));
    }
    if (!visible) {
      setCombinedTransactions([]);
    }
  }, [visible, record]);

  const columns = [
    {
      title: "Event Name",
      dataIndex: "event_name",
      key: "event_name",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (text: string) => new Date(text).toLocaleString(),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text: number, row: any) => {
        const status = row.status?.toUpperCase();
        if (
          status === "REFUNDED" ||
          status === "REJECTED" ||
          status === "DENIED"
        ) {
          return "-";
        }
        return `$${Number(text)?.toFixed(2)}`;
      },
    },
    {
      title: "Action Type",
      dataIndex: "action_type",
      key: "action_type",
    },
    {
      title: "Description / Status",
      dataIndex: "description",
      key: "description",
      render: (text: string, row: any) => {
        if (row.transactionType === "application") {
          return getStatusTag(row.status);
        } else if (row.transactionType === "withdrawal") {
          return getStatusTag(row.status);
        }
        return "N/A";
      },
    },
  ];

  const expandedRowRender = (row: any) => {
    if (row.transactionType === "withdrawal") {
      return (
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            <div>
              <p>
                <strong>Transaction ID:</strong>
                {row._id}
              </p>
              <p>
                <strong>Payment Method:</strong> N/A
              </p>
              <p>
                <strong>Card Last 4:</strong> N/A
              </p>
            </div>
            <div>
              <p>
                <strong>Status:</strong> {getStatusTag(row.status)}
              </p>
              <p>
                <strong>Processed By:</strong> N/A
              </p>
              <p>
                <strong>Processing Time:</strong> N/A
              </p>
            </div>
          </div>
          <div style={{ marginTop: "16px" }}>
            <p>
              <strong>Notes:</strong>{" "}
              {row.originalData.rejected_reason || "N/A"}
            </p>
          </div>
        </div>
      );
    } else if (row.transactionType === "application") {
      const appData = row.originalData;
      const {
        stall_payment_summary,
        tenant_name,
        ticket_type,
        add_ons,
        remark,
      } = appData;

      const addOnsDisplay =
        add_ons && add_ons.length > 0 ? (
          add_ons.map((addon: any, index: number) => (
            <div
              key={index}
              style={{
                fontSize: "0.9em",
                marginLeft: "5px",
                lineHeight: "1.4",
              }}
            >
              - {addon.add_on_type} (x{addon.quantity}) - $
              {Number(addon.amount).toFixed(2)}
            </div>
          ))
        ) : (
          <span style={{ fontSize: "0.9em", marginLeft: "5px" }}>
            No add-ons
          </span>
        );

      return (
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            <div>
              <p>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  Transaction ID:
                </strong>{" "}
                <span style={{ marginLeft: "10px" }}>{row._id}</span>
              </p>
              <p>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  Vendor Name:
                </strong>{" "}
                <span style={{ marginLeft: "10px" }}>
                  {tenant_name || "N/A"}
                </span>
              </p>
              <p>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  Status:
                </strong>{" "}
                <span style={{ marginLeft: "10px" }}>
                  {getStatusTag(row.status)}
                </span>
              </p>
              <p>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  Ticket Type:
                </strong>
                <span style={{ marginLeft: "10px" }}>
                  {ticket_type?.ticket_type || "N/A"} - $
                  {(() => {
                    const addOnsTotal = (add_ons || []).reduce(
                      (sum: number, addon: any) =>
                        sum +
                        (Number(addon.amount) * Number(addon.quantity) || 0),
                      0
                    );
                    const baseTicketPrice =
                      Number(ticket_type?.amount || 0) - addOnsTotal;
                    return baseTicketPrice === 0
                      ? "0"
                      : baseTicketPrice.toFixed(2);
                  })()}
                </span>
              </p>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ display: "block", marginBottom: "2px" }}>
                  Add-ons:
                </strong>
                {addOnsDisplay}
              </div>
              <p style={{ marginTop: "10px" }}>
                <strong>Notes:</strong>
                <span style={{ marginLeft: "10px" }}>{remark || "N/A"}</span>
              </p>
            </div>

            <div>
              <strong>Payment Summary:</strong>
              {stall_payment_summary ? (
                <div style={{ marginLeft: "10px", fontSize: "0.9em" }}>
                  <p>
                    Subtotal: $
                    {Number(stall_payment_summary.sub_total).toFixed(2)}
                  </p>
                  <p>
                    <strong>
                      Final Total: $
                      {Number(stall_payment_summary.final_total).toFixed(2)}
                    </strong>
                  </p>
                  <p style={{ marginTop: "8px" }}>
                    Stripe Fee Belongs To:{" "}
                    {stall_payment_summary.stripe_fee_belong === 0
                      ? "Organizer"
                      : "Vendor"}
                  </p>
                  <p>
                    Total Fee Collected: $
                    {Number(stall_payment_summary.total_fee).toFixed(2)}
                  </p>

                  <div
                    style={{
                      marginTop: "10px",
                      paddingLeft: "5px",
                      borderLeft: "2px solid #eee",
                    }}
                  >
                    <strong>Stripe Fee Details:</strong>
                    <p style={{ marginLeft: "10px" }}>
                      - Billing Percentage:{" "}
                      {stall_payment_summary.stripe_fee?.billing_percentage}%
                    </p>
                    <p style={{ marginLeft: "10px" }}>
                      - Fixed Dollar: $
                      {Number(
                        stall_payment_summary.stripe_fee?.fixed_dollar
                      ).toFixed(2)}
                    </p>
                    <p style={{ marginLeft: "10px" }}>
                      - Percentage:{" "}
                      {stall_payment_summary.stripe_fee?.percentage}%
                    </p>
                    <p style={{ marginLeft: "10px" }}>
                      - Total Stripe Fee: $
                      {Number(
                        stall_payment_summary.stripe_fee?.total_amount
                      ).toFixed(2)}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      paddingLeft: "5px",
                      borderLeft: "2px solid #eee",
                    }}
                  >
                    <strong>VendPopups Commission:</strong>
                    <p style={{ marginLeft: "10px" }}>
                      - Percentage:{" "}
                      {stall_payment_summary.vendpopups_commission?.percentage}%
                    </p>
                    <p style={{ marginLeft: "10px" }}>
                      - Fixed Amount: $
                      {Number(
                        stall_payment_summary.vendpopups_commission
                          ?.fixed_amount
                      )
                        ? Number(
                            stall_payment_summary.vendpopups_commission
                              ?.fixed_amount
                          ).toFixed(2)
                        : "0"}
                    </p>
                    <p style={{ marginLeft: "10px" }}>
                      - Total Commission: $
                      {Number(
                        stall_payment_summary.vendpopups_commission
                          ?.total_amount
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ) : (
                "N/A"
              )}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Modal
      title="Wallet Transaction History"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      mask={true}
      maskStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      {loading ? (
        <div
          style={{
            minHeight: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={combinedTransactions}
          rowKey="_id"
          pagination={false}
          expandable={{
            expandedRowRender,
            rowExpandable: () => true,
            expandRowByClick: true,
          }}
        />
      )}
    </Modal>
  );
};

export default WalletBalanceModal;
