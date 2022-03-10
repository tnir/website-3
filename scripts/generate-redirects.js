import fs from "fs";

const vercelFile = JSON.parse(
  fs.readFileSync(`${process.cwd()}/vercel.json`, "utf8")
);

const redirectArray = vercelFile.redirects.map((redirect) => {
  return `${redirect.source} ${redirect.destination}`;
});

redirectArray.forEach((redirect) => {
  fs.appendFileSync("_redirects", redirect + "\r\n");
});
