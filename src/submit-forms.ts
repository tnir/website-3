import * as client from "@sendgrid/mail";

export type EmailToType = "contact" | "sales";

export const determineToEmail = (toType: EmailToType = "contact") => {
  switch (toType) {
    case "contact":
      return process.env.SENDGRID_TO_EMAIL_CONTACT;
    case "sales":
      return process.env.SENDGRID_TO_EMAIL_SALES;
    default:
      return "contact-test@gitpod.io";
  }
};

export interface Email {
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

export async function sendEmail(
  client: client.MailService,
  email: Email
): Promise<{ statusCode: number; errorMessage?: string }> {
  const data: client.MailDataRequired = {
    from: email.from || "",
    subject: email.subject,
    to: [email.to!],
    replyTo: email.replyTo,
    content: [
      {
        type: "text/plain",
        value: `${
          email.message
            ? email.message
            : `${email.feedback}\n${email.otherFeedback}`
        }`,
      },
    ],
    trackingSettings: {
      clickTracking: {
        enable: false,
        enableText: false,
      },
      openTracking: {
        enable: false,
      },
    },
  };
  try {
    await client.send(data);
    return {
      statusCode: 200,
    };
  } catch (e) {
    return {
      statusCode: 500,
      errorMessage: `Error : ${JSON.stringify(e)}`,
    };
  }
}

export const processEmail = async (body) => {
  console.log(JSON.stringify(body));
  const email: Email = JSON.parse(body!) as Email;
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "no-key";
  const SENDGRID_TO_EMAIL = determineToEmail(email.toType);
  const SENDGRID_FROM_EMAIL = SENDGRID_TO_EMAIL;

  email.from = {
    email: SENDGRID_FROM_EMAIL,
    name: "Gitpod",
  };
  email.to = {
    email: SENDGRID_TO_EMAIL,
    name: "Gitpod",
  };

  client.setApiKey(SENDGRID_API_KEY);
  const response = await sendEmail(client, email);
  return { ...response, ...{ email } };
};
