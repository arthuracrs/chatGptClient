export const revalidate = 0;

import { models } from "./mockResponse";

export async function GET(request: Request) {
  // const data = await fetch(`https://api.openai.com/v1/models`, {
  //   headers: {
  //     "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
  //   },
  // })
  //   .then((res) => res.json());

  // return new Response(
  //   JSON.stringify(
  //     data.data.sort((a: { root: string }, b: { root: any }) =>
  //       a.root.localeCompare(b.root)
  //     ),
  //   ),
  // );

  return new Response(JSON.stringify(models))
}
