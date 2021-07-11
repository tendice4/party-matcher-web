// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import MemberListItem from "../../def/types/member/MemberListItem";
import generateUnique from "../../utils/generateUnique";

const crypto = require("crypto");

type Data = {
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const memberList: MemberListItem[] = req.body;
  const url = crypto
    .createHash("sha256")
    .update(
      generateUnique() + memberList.reduce((acc, cur) => acc + cur.name, "")
    )
    .digest("hex");
  // memberListをurlをキーとしてDBに保存する
  console.log("url", url);
  res.status(200).json({ url: url });
}
