import OpenAIAPI from "../config/openai.js";

export default class PromptController {
  static async sendText(req, res) {
    OpenAIAPI.configure();
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({
            success: false,
            error: "Prompt is required",
        });
    }

    try {
        const textCompletion = OpenAIAPI.textCompletion(`${prompt}`);
        const response = await OpenAIAPI.createCompletion(textCompletion);

        res.status(200).json({
            success: true,
            data: response,
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message
        });
    }
  }
}