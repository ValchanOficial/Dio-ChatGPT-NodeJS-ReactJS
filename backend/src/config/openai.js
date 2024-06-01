import OpenAI from "openai";

export default class OpenAIAPI {
  static configure() {
    return new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  static textCompletion(prompt) {
    return {
      model: "gpt-3.5-turbo-instruct",
      prompt,
      temperature: 0.27,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }

  static async createCompletion(textCompletion) {
    const openai = this.configure();
    const response = await openai.completions.create(textCompletion);
    return response.choices[0].text;
  }
}