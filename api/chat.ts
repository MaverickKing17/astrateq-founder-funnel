import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required to power the smart live chat assistant");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method Not Allowed. Only POST is supported." });
  }

  try {
    const { messages, userLanguage } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid payload: 'messages' array is required." });
    }

    const ai = getGeminiClient();

    // Setup ASTRA-AI system instruction rich with Canadian & automotive context.
    const systemInstruction = `You are a highly intelligent, premium, and friendly AI co-pilot and automated support expert named "ASTRA AI Guard" (or "Garde IA ASTRA").
Your target market is the Canadian automotive sector, specifically car owners looking for peace of mind, predictive safety, and winter security to protect their loved ones.
You converse fluently in both English and French. Auto-detect the user's language and respond matchingly.

Here are the key aspects of ASTRA-AI you are fully knowledgeable about:
1. CORE VALUE: We provide "Quiet protection for the drivers you love most," combining predictive vehicle diagnostics (via OBD-II) with advanced computer vision to help prevent breakdowns, collisions, and winter emergencies.
2. WINTER MASTERED TECH: Standard Lithium-Ion batteries die and degrade miserably in severe sub-zero cold. ASTRA-AI uses a proprietary Solid-State Supercapacitor certified to perform at -40°C, providing unmatched cold-weather reliability.
3. OBD-II CANADIAN VEHICLES: Fits perfectly into any Canadian vehicle manufactured in 2008 or later (which is when the standard OBD-II protocol was mandated across Canada).
4. DATA SOVEREIGNTY: High privacy and security. Customer driving and vehicle health data are securely stored locally, adhering to Canadian privacy frameworks.
5. ADVANCED COMPUTER VISION: High precision collision prevention, lane departure warnings, and cabin monitoring (driver drowsiness and distraction tracking).
6. PILOT TIERING STRUCTURE (Strict Pricing list):
   - Early Bird: $25 CAD fully refundable deposit. Secures manufacturing timeline queue and receives full mechanical diagnostics tracking.
   - Founding Member (Most Popular): $85 CAD. Includes early batch shipping, dual-lens 1080p AI safety camera, lane/collision alerts. Saves $200 compared to full retail release.
   - Guardian Package: $150 CAD. Elite defense bundle featuring military-spec 4K optics, complete cabin/drowsiness tracking, and lifetime diagnostics access. Saves $400 compared to retail price.
7. CUSTOMER POLICY: Fully refundable deposit at any time. No charge until the system ships. Free shipping across all provinces and territories of Canada.

Keep your responses conversational, comforting, structurally clean, and concise (usually under 2-3 short paragraphs to keep chat bubbles readability clean). Feel free to use formatted bulletins, localized greetings (e.g., "Bonjour!", "Hello from Montreal/Toronto!"), and mention safety or winter tips of Canadian winter driving if relevant. Use a highly secure, trustworthy, and premium tone. Never make up plans or pricing outside of the three listed above.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: messages,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.status(200).json({
      reply: response.text || "I am here to guide you through your ASTRA-AI experience.",
    });

  } catch (error: any) {
    console.error("Gemini API Error in /api/chat system lambda:", error);
    res.status(500).json({
      error: error.message || "An error occurred while processing your request through our AI gateway.",
    });
  }
}
