import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PromptService {
  async getPromptResponse(prompt) {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyACLMF_aFZga4Dl9nw3rZ2C76N5pwbNTsA`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt || 'Explain how AI works',
              },
            ],
          },
        ],
      },
    );
    return {
      message: response.data.candidates[0].content.parts[0].text,
    };
  }
}
