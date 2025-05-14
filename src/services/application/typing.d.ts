declare namespace API_APPLICATION {
	// Based on the provided application object and backend controller enrichments
	export interface Application {
		_id: string; // MongoDB ObjectId
		tenant_id: string;
		event_id: string;
		ticket_type?: {
			ticket_type: string;
			amount: number;
			questions?: {
				questions: string;
				answer: string;
				file?: any; // Can be string (URL) or null
			}[];
		};
		add_ons?: {
			add_on_type: string;
			quantity: number;
			amount: string; // Or number, clarify based on actual data
		}[];
		application_fee_status: "Paid" | "Unpaid" | "Failed" | "Pending" | string; // Enum or string
		application_fee_session_id?: string;
		stall_payment_status: "Paid" | "Waiting" | "Refunded" | "Unpaid" | "Failed" | "Pending" | string; // Enum or string
		fee_stripe_snap_shot?: string; // JSON string, consider parsing to an object if needed frontend
		stall_stripe_snap_shot?: string; // JSON string
		stall_payment_session_id?: string;
		stall_payment_summary?: {
			sub_total: number;
			final_total: number;
			stripe_fee_belong: number; // 1 for platform, or other indicators
			total_fee: number;
			stripe_fee: {
				billing_percentage?: number;
				fixed_dollar?: number;
				percentage: number;
				total_amount: number;
			};
			vendpopups_commission: {
				percentage: number;
				fixed_amount?: number;
				total_amount: number;
			};
		};
		stall_payment_url?: string;
		transaction_summary?: {
			completed_dateTime?: string; // ISO Date string
			fee_and_commission: number;
			landowner_final_profit: number;
		};
		remark?: string;
		tenant_rate_event_status?: string;
		landowner_rate_tenant_status?: string;
		tenant_rate_landowner_status?: string;
		schedule?: {
			start_time: string; // ISO Date string
			end_time: string; // ISO Date string
		}[];
		createdAt: string; // ISO Date string
		updatedAt: string; // ISO Date string
		__v?: number;

		// Enriched fields from the backend
		event_name?: string;
		tenant_name?: string; // Or business_name
	}

	// You might also need a type for Refund entries if you plan to combine them here,
	// or keep it separate if refunds are handled distinctly.
	export interface Refund {
		_id: string;
		application_id: string; // Reference to Application._id
		refunded_amount: number;
		refunded_datetime: string; // ISO Date string
		is_confirm_refunded: boolean;
		refunded_receipt_url?: string;
		refunded_charge_code?: string;
		refunded_currency?: string;
		__v?: number;

		// Potentially enriched data for refunds, if applicable
		application?: Application; // If you embed the full application for context
		event_name?: string; // If denormalized
		tenant_name?: string; // Changed from tenant_business_name to match Application interface
	}
}
