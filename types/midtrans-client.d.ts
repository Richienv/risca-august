declare module 'midtrans-client' {
  export interface MidtransClientOptions {
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
  }

  export interface TransactionDetails {
    order_id: string;
    gross_amount: number;
  }

  export interface SnapTransactionParameters {
    transaction_details: TransactionDetails;
  }

  export interface SnapTransactionResponse {
    token: string;
    redirect_url: string;
  }

  export interface TransactionStatusResponse {
    order_id: string;
    transaction_id: string;
    transaction_status: string;
    fraud_status?: string;
    status_message: string;
    gross_amount: string;
    payment_type: string;
    transaction_time: string;
    status_code: string;
  }

  export interface TransactionActionResponse {
    order_id: string;
    transaction_status: string;
    status_message: string;
  }

  export class Snap {
    constructor(options: MidtransClientOptions);
    createTransaction(parameter: SnapTransactionParameters): Promise<SnapTransactionResponse>;
  }

  export class CoreApi {
    constructor(options: MidtransClientOptions);
    charge(parameter: any): Promise<any>;
    status(orderId: string): Promise<TransactionStatusResponse>;
    cancel(orderId: string): Promise<TransactionActionResponse>;
    approve(orderId: string): Promise<TransactionActionResponse>;
    deny(orderId: string): Promise<TransactionActionResponse>;
  }
}