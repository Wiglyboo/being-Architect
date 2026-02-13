
import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatWindow: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I noticed you were exploring our portfolio. I'm the Being Architect AI consultant. What kind of space are you dreaming of building today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => m.text), userMessage].join('\n'),
        config: {
          systemInstruction: "You are the elegant AI Design Consultant for 'Being Architect', a premium architecture firm in Chennai. Your goal is to capture project requirements (Type, Location, Vision) from potential clients. Be inspired, professional, and helpful. Keep responses under 2 sentences. If they provide details, offer to have Ar. Narasimhan contact them.",
          temperature: 0.7,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "That sounds fascinating. Could you tell me more about the location or your specific vision?" }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having a small technical glitch, but I'd love to hear more. Could you share your contact details or email us directly at office.beingarchitect@gmail.com?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] max-w-[400px] h-[500px] bg-brand-black border border-white/10 shadow-2xl z-[100] flex flex-col animate-fade-in">
      <div className="p-4 bg-brand-yellow flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Bot size={20} className="text-brand-black" />
          <span className="text-brand-black font-black text-xs tracking-widest uppercase">Design Consultant</span>
        </div>
        <button onClick={onClose} className="text-brand-black hover:scale-110 transition-transform">
          <X size={20} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 text-sm leading-relaxed ${m.role === 'user' ? 'bg-brand-yellow text-brand-black' : 'bg-white/5 text-white'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 text-white p-4 text-xs italic opacity-50">AI is thinking...</div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/10 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your vision..."
          className="flex-grow bg-white/5 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-brand-yellow text-white"
        />
        <button onClick={handleSend} className="bg-brand-yellow p-2 text-brand-black">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
