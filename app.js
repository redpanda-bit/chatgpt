import { ChatGPTAPI } from "chatgpt";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
});

const askChatGPT = async (askQuestion, userInput) => {
  const res = await api.sendMessage(userInput);
  askQuestion(res.text + ` press control+c to exit : \n\nYou: `);
};

const makeRequest = async () => {
  const askQuestion = (question) => {
    readline.question(
      "\nChatGPT: " + question || "" + "\nYou: ",
      askChatGPT.bind(null, askQuestion),
    );
  };
  await askQuestion(`Ask me a question or say hi! : \n\nYou: `);
};

makeRequest();
