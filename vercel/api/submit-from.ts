import type { VercelRequest, VercelResponse } from "@vercel/node";
import { processEmail } from "../../src/submit-forms";

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const mailResponse = await processEmail(request.body);
    response
      .status(mailResponse.statusCode)
      .send(JSON.stringify(mailResponse.email) + " added");
  } catch (err) {
    response.status(500).send(err);
  }
};
