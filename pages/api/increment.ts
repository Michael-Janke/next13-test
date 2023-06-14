import { NextApiRequest, NextApiResponse } from "next";

var c = 0;
 
export default function handler(request: NextApiRequest, response: NextApiResponse) {
  c++; // :-)
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    c
  });
}

export function getCounter() {
  console.log("test", c);
  return c++
};