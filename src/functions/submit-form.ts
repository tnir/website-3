import type { Handler } from "@netlify/functions";
import { processEmail } from "../submit-forms";

const handler: Handler = function (event, _, callback) {
  processEmail(event.body)
    .then((response) => {
      callback(null, {
        statusCode: response.statusCode,
        body: JSON.stringify(response.email) + " added",
      });
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });
};

export { handler };
