import { ChatGPTAPI } from "chatgpt";
import { createInterface } from "readline";

const makeRequest = async () => {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (question) => {
    readline.question(
      "ChatGPT: " + question || "" + "\n\nYou: ",
      async (input) => {
        const api = new ChatGPTAPI({
          apiKey: process.env.OPENAI_API_KEY,
        });
        const res = await api.sendMessage(input);
        askQuestion(res.text + ` press control+c to exit : \n\nYou: `);
      },
    );
  };
  await askQuestion(`Ask me a question or say hi! : \n\nYou: `);
};

makeRequest();
