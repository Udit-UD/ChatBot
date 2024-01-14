import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: "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",
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
  return res.choices[0];
}
