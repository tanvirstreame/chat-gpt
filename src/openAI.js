import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_TOKEN
});

export async function generateChat(content) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'user', content },
      ],
      max_tokens: 50,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating story:', error);
  }
}
