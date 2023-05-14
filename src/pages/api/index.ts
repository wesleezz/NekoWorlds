// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  что;
  визя: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({
    что: "как ты тут оказался? ну что я могу сказать ты попал в апи сайта тут нету ничего интересного",
    визя: "апи сделал визя как и весь сайт",
  });
}
