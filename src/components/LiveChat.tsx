import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles, Bot, Clock, HelpCircle, CornerDownLeft, Shield } from "lucide-react";
import { Language } from "../types";

interface LiveChatProps {
  language: Language;
}

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export default function LiveChat({ language }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initial welcome message configured instantly on load/change
  useEffect(() => {
    const isFr = language === 'fr';
    const welcomeText = isFr 
      ? "Bonjour ! Je suis le co-pilote ASTRA AI Guard. Comment puis-je vous aider à sécuriser vos proches sur les routes canadiennes aujourd'hui ? Je connais tout sur notre supercondensateur de classe hivernale -40°C et nos forfaits de réservation."
      : "Bonjour! I am your ASTRA AI Guard co-pilot. How can I help secure the drivers you love today? Feel free to ask about our -40°C certified arctic supercapacitors or our pre-order reservation tiers.";
    
    setMessages([
      {
        id: "initial-welcome",
        role: "model",
        text: welcomeText,
        timestamp: new Date()
      }
    ]);

    // Show a small subtle notification pill after 3 seconds to encourage interaction
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [language]);

  // Handle scroll down on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isLoading]);

  // Pre-filled Quick Starter questions for users
  const quickStarters = language === "en" 
    ? [
        { label: "🍁 Why is standard Li-Ion bad in winter?", query: "Why are lithium-ion batteries a risk in Canadian winters compared to your supercapacitor?" },
        { label: "🔌 Does it fit my 2011 Civic?", query: "Is ASTRA-AI compatible with a 2011 Honda Civic in Canada?" },
        { label: "💳 What is the Guardian Package?", query: "Can you detail the Guardian Package features and the savings?" },
        { label: "🔐 Is my data hosted in Canada?", query: "How is my driver data secured and is it kept in Canada?" }
      ]
    : [
        { label: "🍁 Le supercondensateur s'use-t-il par grand froid ?", query: "En quoi les batteries Lithium-ion standards sont-elles risquées en hiver et pourquoi préférez-vous le supercondensateur ?" },
        { label: "🔌 Compatible avec ma Civic 2011 ?", query: "Le système ASTRA-AI est-il compatible avec une Honda Civic 2011 canadienne ?" },
        { label: "💳 C'est quoi le forfait Gardien ?", query: "Pouvez-vous m'expliquer le forfait Gardien et les économies de 400$ ?" },
        { label: "🔐 Où sont hébergées mes données ?", query: "Comment mes données de conduite sont-elles sécurisées au Canada ?" }
      ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    // Create user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    // Update state & clear input
    setMessages(prev => [...prev, userMsg]);
    setInputVal("");
    setIsLoading(true);
    setShowNotification(false);

    try {
      // Map message history to Gemini API format: { role: 'user' | 'model', parts: [{ text: '...' }] }
      const apiHistory = [...messages, userMsg].map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // Call Express proxy endpoint
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: apiHistory,
          userLanguage: language
        })
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setMessages(prev => [
          ...prev,
          {
            id: `model-${Date.now()}`,
            role: "model",
            text: data.reply,
            timestamp: new Date()
          }
        ]);
      } else {
        throw new Error(data.error || "Failed upstream telemetry request");
      }

    } catch (err: any) {
      console.error("Chat message delivery error:", err);
      // Give a helpful fallback bilingual error message
      const errorText = language === 'fr'
        ? "Désolé, j'ai rencontré une anomalie lors de la liaison satellite avec le réseau d'IA. Veuillez réessayer dans quelques instants."
        : "Apologies, I encountered a telemetry issue linking with the AI network. Please try submitting your request again.";

      setMessages(prev => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "model",
          text: errorText,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickClick = (query: string) => {
    handleSendMessage(query);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="live-chat-root">
      
      {/* Floating Action Badge Notification banner */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-18 right-2 w-72 bg-gradient-to-r from-[#1A1A2E] to-[#141424] text-white p-3.5 shadow-2xl border border-[#00D4FF]/30 backdrop-blur-md rounded-none text-left"
            id="chat-notification-bubble"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                <span className="text-[10px] uppercase font-mono font-black text-[#00D4FF] tracking-wider">
                  {language === 'en' ? "ASTRA ACTIVE GUARD" : "GARDE ACTIVE ASTRA"}
                </span>
              </div>
              <button 
                onClick={() => setShowNotification(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-200 mt-1.5 font-medium leading-relaxed">
              {language === 'en' 
                ? "Got winter vehicle questions? Chat with our AI Specialist in real-time."
                : "Des questions sur les pannes hivernales ? Échangez avec notre expert IA en direct."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Trigger Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-tr from-[#1E2538] via-[#1A1A2E] to-[#00D4FF] text-white flex items-center justify-center shadow-xl border border-[#00D4FF]/20 relative cursor-pointer"
        aria-label="Toggle Live Chat Assistant"
        id="chat-fob-trigger"
      >
        <div className="absolute inset-0 bg-[#00D4FF] opacity-0 hover:opacity-10 transition-opacity duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-[#00D4FF]" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Expandable Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="absolute bottom-18 right-0 w-[360px] sm:w-[420px] h-[580px] bg-[#FFFFFF] border-2 border-[#1A1A2E] flex flex-col shadow-2xl overflow-hidden rounded-none text-left"
            id="chat-window-container"
          >
            {/* Header section with brand asset styling */}
            <div className="relative bg-gradient-to-r from-[#1A1A2E] to-[#111122] text-white p-4.5 border-b border-[#00D4FF]/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-none bg-[#00D4FF]/10 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF]">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-sm tracking-widest text-[#00D4FF] uppercase">
                    {language === 'en' ? "ASTRA AI GUARD" : "GARDE IA ASTRA"}
                  </h3>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="text-[10px] text-slate-300 font-mono font-bold tracking-wider uppercase">
                      {language === 'en' ? "Active Canadian Co-Pilot" : "Co-Pilote Canadien Actif"}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-slate-400">
                <span className="text-[10px] bg-slate-800/80 px-2 py-0.5 border border-slate-700 font-mono tracking-widest text-slate-200">
                  {language === 'en' ? "BILINGUAL" : "BILINGUE"}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:text-white hover:bg-slate-800 transition-all rounded-none"
                  aria-label="Collapse Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Window */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3 scrollbar-thin scrollbar-thumb-slate-200"
              id="chat-scroll-viewport"
            >
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex ${isUser ? "justify-end" : "justify-start"} items-end space-x-2`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 bg-gradient-to-tr from-[#1A1A2E] to-[#00D4FF] text-white flex items-center justify-center text-[10px] font-black shrink-0">
                        A
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3.5 text-xs font-semibold leading-relaxed border ${
                        isUser
                          ? "bg-[#1A1A2E] text-white border-[#1A1A2E]"
                          : "bg-white text-slate-800 border-slate-200"
                      }`}
                    >
                      {m.text}
                      <span className={`block text-[8px] mt-1.5 text-right font-mono ${isUser ? "text-slate-400" : "text-slate-400"}`}>
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Waiting Telemetry Animation loop */}
              {isLoading && (
                <div className="flex justify-start items-end space-x-2">
                  <div className="w-7 h-7 bg-gradient-to-tr from-[#1A1A2E] to-[#00D4FF] text-white flex items-center justify-center text-[10px] font-black shrink-0">
                    A
                  </div>
                  <div className="bg-white text-slate-800 border border-slate-200 p-3.5 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase text-cyan-600 tracking-wider font-extrabold flex items-center">
                        <Sparkles className="w-3 h-3 text-[#00D4FF] mr-1 animate-spin" />
                        {language === 'en' ? "Syncing core mechanics..." : "Synchronisation mécanique..."}
                      </span>
                    </div>
                    {/* Pulsing visual bouncing dots */}
                    <div className="flex space-x-1 mt-2.5 ml-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce delay-0" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-bounce delay-150" />
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-800 animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick click options helper list */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-2.5 bg-slate-100 border-t border-slate-200" id="chat-quick-starters">
                <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest block mb-1.5">
                  {language === 'en' ? "PRE-ROUTE QUESTIONS" : "SUGGESTIONS DE REQUÊTE"}
                </span>
                <div className="flex flex-col gap-1.5">
                  {quickStarters.map((qs, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickClick(qs.query)}
                      className="w-full text-left px-2.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#00D4FF] border border-slate-200 text-[10px] font-extrabold uppercase tracking-wider transition-colors cursor-pointer block truncate"
                    >
                      {qs.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* User Typing input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2"
              id="live-chat-input-form"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={language === 'en' ? "Ask about ASTRA diagnostics..." : "Posez une question sur le système..."}
                disabled={isLoading}
                className="flex-1 px-3 py-2.5 bg-slate-50 hover:bg-slate-100 focus:bg-white text-slate-900 border border-slate-250 focus:border-[#00D4FF] outline-none text-xs font-semibold placeholder-slate-400 font-sans transition-all"
                id="chat-user-textbox"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isLoading}
                className="p-2.5 bg-[#1A1A2E] hover:bg-[#00D4FF] text-white hover:text-[#1A1A2E] disabled:bg-slate-100 disabled:text-slate-300 border border-[#1A1A2E] hover:border-[#00D4FF] transition-all cursor-pointer flex items-center justify-center"
                aria-label="Submit message"
                id="chat-submit-btn"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Mini Sovereign Canadian Cloud Badge Trust builder */}
            <div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex items-center justify-between text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              <span className="flex items-center">
                <Shield className="w-3 h-3 text-emerald-600 mr-1 shrink-0" />
                {language === 'en' ? "Data Guard: Sovereign Local Cloud" : "Protection : Données souveraines Canada"}
              </span>
              <span>100% Secure</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
