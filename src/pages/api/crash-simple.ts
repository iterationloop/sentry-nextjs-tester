// A faulty API route to test Sentry's error monitoring
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  console.log(_req.url);
  console.log(process.env);

  // throw new Error("Sentry Example API Route Error");
  // biome-ignore lint/correctness/noUnreachable: <explanation>
  res.status(200).json({ name: "John Doe" });
}
