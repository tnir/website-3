export declare type EmailToType = "contact" | "sales";

export declare interface Email {
  to?: {
    email: string;
    name?: string;
  };
  toType?: EmailToType;
  from?: {
    email: string;
    name?: string;
  };
  replyTo: {
    email: string;
    name?: string;
  };
  subject: string;
  message?: string;
  feedback?: string;
  otherFeedback?: string;
}

export declare interface SheetInfo {
  sheetTitle: string;
  data: any[];
  type?: "signup";
}

export declare interface SignupData {
  type: "newsletter" | "ambassador program" | "blog-email";
  email: string;
}
