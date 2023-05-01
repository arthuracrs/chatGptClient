import { OpenAI } from "langchain/llms/openai";

export const revalidate = 0;

export async function GET(request: Request) {
  // const model = new OpenAI({ temperature: 0.9 });
  // const res = await model.call(
  //   "What would be a good company name a company that makes colorful socks?",
  // );

  const res = "Sock Splash.";

  return new Response(JSON.stringify({ name: res }));
}
