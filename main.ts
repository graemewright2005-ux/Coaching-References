import { defineGem, chat, UserSession } from "gemini-gem-sdk";

export default defineGem({
  name: "AI Coach for Training Plans",
  version: "0.1.0",
  description: "Guides FE & HE staff through creating, running, and reflecting on training plans.",
  entry: chat(async (session: UserSession, input: string) => {
    if (/design.*training plan/i.test(input)) {
      return `Let's design a training plan! What's your main goal or topic?`;
    }
    return `I'm your AI Coach! Ask me to help design a training plan, suggest engagement strategies, or provide coaching questions.`;
  }),
});
