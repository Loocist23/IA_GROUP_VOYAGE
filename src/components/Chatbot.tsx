"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      text: "Bonjour ! Je suis votre assistant de voyage temporel alimenté par Mistral AI. Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Get bot response from Mistral API
      const botResponse = await getMistralResponse(inputValue);
      
      const botMessage = {
        id: Date.now() + 1, // Ensure unique ID
        text: botResponse,
        sender: "bot",
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching Mistral response:", error);
      // The error is already handled in getMistralResponse with fallback
      // So we don't need to add an error message here as the function returns a valid response
    } finally {
      setIsLoading(false);
    }
  };

  // Fallback responses if Mistral API fails
  const generateFallbackResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("paris") || lowerInput.includes("1889")) {
      return "Paris 1889 est une destination magnifique ! Vous pourrez voir la Tour Eiffel lors de l'Exposition Universelle, découvrir les cafés de la Belle Époque et l'ambiance artistique de Montmartre. C'est un voyage de 7 jours au prix de 2999€.";
    }

    if (lowerInput.includes("créta") || lowerInput.includes("dinosaure")) {
      return "Le Crétacé est une aventure incroyable ! Vous voyagerez 65 millions d'années en arrière pour observer les dinosaures dans leur habitat naturel. C'est une expérience unique de 5 jours au prix de 4999€.";
    }

    if (lowerInput.includes("florence") || lowerInput.includes("renaissance")) {
      return "Florence 1504 est le berceau de la Renaissance ! Vous pourrez rencontrer des artistes comme Michel-Ange, visiter des ateliers d'art et découvrir l'architecture magnifique de l'époque. Ce voyage dure 6 jours et coûte 3499€.";
    }

    if (lowerInput.includes("prix") || lowerInput.includes("coût")) {
      return "Nos tarifs varient selon la destination : Paris 1889 à 2999€, le Crétacé à 4999€ et Florence 1504 à 3499€. Tous nos voyages incluent l'hébergement, les repas et les activités guidées.";
    }

    if (lowerInput.includes("réserver") || lowerInput.includes("réservation")) {
      return "Pour réserver, vous pouvez cliquer sur le bouton 'Réserver maintenant' sur la carte de la destination qui vous intéresse, ou me dire quelle destination vous souhaitez et je peux vous guider dans le processus.";
    }

    if (lowerInput.includes("sécurité") || lowerInput.includes("dangereux")) {
      return "Ne vous inquiétez pas, nos voyages temporels sont parfaitement sûrs ! Nous utilisons une technologie de pointe avec des protocoles de sécurité stricts. Vous serez accompagné par des guides expérimentés à tout moment.";
    }

    return "Merci pour votre question ! Je suis ici pour vous aider à planifier votre voyage temporel. Vous pouvez me demander des informations sur nos destinations, nos tarifs ou le processus de réservation.";
  };

  const getMistralResponse = async (userInput: string): Promise<string> => {
    // Check if API key is available
    if (!process.env.NEXT_PUBLIC_MISTRAL_API_KEY) {
      console.warn("Mistral API key not found, using fallback responses");
      return generateFallbackResponse(userInput);
    }

    try {
      const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistral-small",
          messages: [
            {
              role: "system",
              content: "Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe. Ton rôle est de conseiller les clients sur les meilleures destinations temporelles (Paris 1889, Crétacé, Florence 1504) avec enthousiasme et expertise. Réponds en français, soyez professionnel mais chaleureux, passionné d'histoire et expert en voyage temporel.",
            },
            {
              role: "user",
              content: userInput,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Mistral API error:", response.status, errorData);
        
        // Specific error handling
        if (response.status === 401) {
          console.error("Invalid Mistral API key - please check your .env.local file");
          return "Désolé, il semble que notre service de chat intelligent soit temporairement indisponible. Voici une réponse alternative : " + generateFallbackResponse(userInput);
        }
        
        if (response.status === 429) {
          return "Désolé, nous avons reçu trop de demandes. Veuillez réessayer dans quelques minutes.";
        }
        
        throw new Error(`Mistral API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error calling Mistral API:", error);
      console.warn("Falling back to predefined responses");
      return generateFallbackResponse(userInput);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-96 h-[600px] bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="bg-gold-500 text-black p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-bold text-lg">TimeTravel Assistant</h3>
            <button
              onClick={toggleChat}
              className="text-black hover:text-gray-700"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-white/50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === "user" ? "bg-gold-500 text-black rounded-br-none" : "bg-white/80 text-gray-800 rounded-bl-none"}`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 flex justify-start"
                >
                  <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-white/80 text-gray-800 rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </AnimatePresence>
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Posez-moi vos questions sur les voyages temporels..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`p-2 rounded-full transition-colors ${isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-gold-500 text-black hover:bg-gold-400"}`}
                aria-label="Send message"
                disabled={isLoading || !inputValue.trim()}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className="w-16 h-16 bg-gold-500 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-gold-400 transition-colors"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}
    </div>
  );
}