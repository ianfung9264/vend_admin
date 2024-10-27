interface CommonResponse<T> {
  detail: T;
}
export enum EventStatus {
  NORMAL,
  CANCEL,
  SUSPEND,
}
export enum LandownerAdvancedStatus {
  UNAPPROVED,
  WAITING,
  APPROVED,
}
export enum LandownerWithdrawApprovalStatus {
  WAITING,
  APPROVED,
  DENIED,
  COMPLETED,
}
export enum Role {
  LANDOWNER,
  PLATFORM,
  TENANT,
}

export enum Gender {
  MAN,
  WOMAN,
  OTHER,
}
export enum EventType {
  SINGLE = "single",
  MULTI = "multi",
  RECURRING = "recurring",
}
export enum OtpStatusType {
  UNVERIFIED,
  VERIFIED,
  REGISTERED,
  FORGET_PASSWORD,
}
export enum OtpRole {
  LANDOWNER,
  TENANT,
}

export enum EStallPaymentStatus {
  Waiting = "Waiting",
  Accept = "Accept",
  Denied = "Denied",
  Paid = "Paid",
  Refunded = "Refunded",
  Expired = "Expired",
}

export enum EApplicationFeeStatus {
  Waiting = "Waiting",
  Paid = "Paid",
  Fee_Not_Enough = "Fee_Not_Enough",
}

export enum ELogType {
  STRIPE_WEB_HOOK = "STRIPE_WEB_HOOK",
}

export enum EWebhookEvents {
  CHECKOUT_SESSION_ASYNC_PAYMENT_FAILED = "checkout.session.async_payment_failed",
  CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED = "checkout.session.async_payment_succeeded",
  CHECKOUT_SESSION_COMPLETED = "checkout.session.completed",
  CHECKOUT_SESSION_EXPIRED = "checkout.session.expired",
  REFUND_UPDATED = "refund.updated",
  REFUND_CREATED = "refund.created",
  REFUND_FAILED = "refund.failed",
  CHARGE_REFUNDED = "charge.refunded",
}

export enum ERateStatus {
  READY = "READY",
  COMMENTED = "COMMENTED",
  NOT_READY = "NOT_READY",
}
export enum WithdrawalProgress {
  WAITING_FOR_APPROVE = "WAITING_FOR_APPROVE",
  APPROVED_PROGRESSING = "APPROVED_PROGRESSING", // Deduct wallet amount here
  APPROVED_COMPLETED = "APPROVED_COMPLETED",
  REJECTED = "REJECTED",
}
export enum WithdrawalProgressNoRejected {
  WAITING_FOR_APPROVE = "WAITING_FOR_APPROVE",
  APPROVED_PROGRESSING = "APPROVED_PROGRESSING", // Deduct wallet amount here
  APPROVED_COMPLETED = "APPROVED_COMPLETED",
}
