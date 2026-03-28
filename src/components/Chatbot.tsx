"use client";

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowUp } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

function formatMessage(text: string) {
  // Strip markdown artifacts
  const clean = text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/^#+\s/gm, '').replace(/^-\s/gm, '• ');
  // Split into paragraphs and render with spacing
  const paragraphs = clean.split(/\n\n+/).filter(p => p.trim());
  if (paragraphs.length <= 1) {
    // Single paragraph — also handle single newlines
    const lines = clean.split(/\n/).filter(l => l.trim());
    return lines.map((line, i) => (
      <span key={i}>
        {line}
        {i < lines.length - 1 && <><br/><br/></>}
      </span>
    ));
  }
  return paragraphs.map((p, i) => (
    <span key={i} style={{ display: 'block', marginBottom: i < paragraphs.length - 1 ? 10 : 0 }}>
      {p.trim()}
    </span>
  ));
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      const assistantId = (Date.now() + 1).toString();

      setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

      if (reader) {
        let done = false;
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: m.content + chunk } : m
              )
            );
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 2).toString(), role: 'assistant', content: 'My apologies — I seem to be momentarily unavailable. Please try again shortly.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'absolute',
                bottom: 72,
                right: 0,
                width: 'min(370px, calc(100vw - 1rem))',
                height: 'min(520px, calc(100vh - 6rem))',
                maxHeight: '80vh',
                background: '#ffffff',
                borderRadius: 20,
                boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header — clean, flat */}
              <div style={{
                padding: '18px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #f0f0f0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#00103e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: 'Manrope, sans-serif',
                  }}>
                    B
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0a0a0a', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.01em' }}>
                      Blue Ocean Inco
                    </div>
                    <div style={{ fontSize: 11, color: '#22c55e', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                      Online now
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: '#f5f5f5',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#666',
                  }}
                >
                  <X size={14} />
                </button>
              </div>

              {/* Messages */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                background: '#fafafa',
                scrollBehavior: 'smooth',
              }}>
                {/* Welcome message */}
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    style={{ textAlign: 'center', paddingTop: 40 }}
                  >
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: '#00103e',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 700,
                      fontFamily: 'Manrope, sans-serif',
                      marginBottom: 16,
                    }}>B</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#0a0a0a', marginBottom: 6, fontFamily: 'Manrope, sans-serif' }}>
                      Hi there 👋
                    </div>
                    <div style={{ fontSize: 13, color: '#888', lineHeight: 1.5, maxWidth: 260, margin: '0 auto' }}>
                      I&apos;m your dedicated concierge at Blue Ocean Inco. How can I assist you today?
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 20 }}>
                      {['Tell me about your investment strategy', 'What are your core pillars?', 'How can I become a promoter?'].map((q) => (
                        <button
                          key={q}
                          onClick={() => { setInput(q); }}
                          style={{
                            padding: '10px 14px',
                            borderRadius: 12,
                            border: '1px solid #e8e8e8',
                            background: '#fff',
                            fontSize: 12,
                            color: '#444',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontFamily: 'Inter, sans-serif',
                            transition: 'background 0.15s',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: m.role === 'user' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    {m.role === 'assistant' && (
                      <div style={{ fontSize: 10, color: '#999', marginBottom: 4, paddingLeft: 2, fontWeight: 500 }}>
                        Blue Ocean Inco
                      </div>
                    )}
                    <div
                      style={m.role === 'user'
                        ? {
                            padding: '10px 14px',
                            borderRadius: '16px 16px 4px 16px',
                            background: '#00103e',
                            color: '#ffffff',
                            fontSize: 13,
                            lineHeight: 1.55,
                            maxWidth: '82%',
                            fontFamily: 'Inter, sans-serif',
                            wordBreak: 'break-word' as const,
                          }
                        : {
                            padding: '10px 14px',
                            borderRadius: '16px 16px 16px 4px',
                            background: '#ffffff',
                            color: '#1a1a1a',
                            fontSize: 13,
                            lineHeight: 1.55,
                            maxWidth: '82%',
                            fontFamily: 'Inter, sans-serif',
                            wordBreak: 'break-word' as const,
                          }
                      }
                    >
                      {m.content ? formatMessage(m.content) : '…'}
                    </div>
                  </motion.div>
                ))}

                {isLoading && messages.length > 0 && messages[messages.length - 1]?.content === '' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                  >
                    <div style={{ fontSize: 10, color: '#999', marginBottom: 4, paddingLeft: 2, fontWeight: 500 }}>
                      Blue Ocean Inco
                    </div>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '16px 16px 16px 4px',
                      background: '#ffffff',
                      display: 'flex',
                      gap: 4,
                      alignItems: 'center',
                    }}>
                      <motion.span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ccc', display: 'block' }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
                      <motion.span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ccc', display: 'block' }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                      <motion.span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ccc', display: 'block' }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input — minimal */}
              <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f0', background: '#ffffff' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: 12,
                      border: '1px solid #e8e8e8',
                      background: '#fafafa',
                      fontSize: 13,
                      color: '#1a1a1a',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#ccc')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e8e8e8')}
                  />
                  <button
                    disabled={isLoading || input.length === 0}
                    type="submit"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: input.length > 0 ? '#00103e' : '#e0e0e0',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: input.length > 0 ? 'pointer' : 'default',
                      color: '#fff',
                      flexShrink: 0,
                      transition: 'background 0.15s',
                    }}
                  >
                    <ArrowUp size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#00103e',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 100,
          }}
        >
          {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </motion.button>
      </div>
    </>
  );
}

