import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { streamText } from 'ai'

export async function POST(req: Request) {
    const { messages } = await req.json()

   const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!
})

    const result = await streamText({
        model: google('gemini-3.6-flash'),
        system: "You are a helpful customer support assistant for 01 Digital Hub, a trusted electronics store in Lagos Nigeria specialising in phones, laptops and accessories. Be friendly and helpful.",
        messages,
    })

  return result.toDataStreamResponse()
}