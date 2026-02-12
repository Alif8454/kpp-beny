import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini API
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Lumi", a helpful and stylish personal shopping assistant for "Lumina Merch". 
We sell premium minimalist merchandise: Tumblers, T-Shirts, and Mugs.
Our design philosophy is "Simple, Earthy, Timeless".

Products in our catalog:
1. "The Daily Tumbler" - $25, keeps drinks hot/cold for 12h. Colors: Matte Black, Cream, Clay.
2. "Essential Cotton Tee" - $30, organic cotton, oversized fit. Colors: White, Charcoal, Sage.
3. "Studio Mug" - $18, hand-finished ceramic. Colors: Speckled White, Terracotta.
4. "Travel Commuter" - $28, tumbler with handle. Colors: Navy, Steel.
5. "Minimalist Hoodie" - $55, heavy weight fleece. Colors: Black, Heather Grey.

Your goal is to help users find the perfect item, suggest color combinations, or explain our sustainability focus. 
Keep your answers concise, friendly, and helpful. Use emojis sparingly.
`;

let chatSession: Chat | null = null;

export const getChatSession = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm having a little trouble thinking right now. Could you ask again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline or experiencing issues. Please try again later.";
  }
};