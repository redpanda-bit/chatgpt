import { ChatGPTAPI } from "chatgpt";

const makeRequest = async () => {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const res = await api.sendMessage("make my baby go to sleep today");
  console.log("**LOG** response: ", res);
};

makeRequest();
