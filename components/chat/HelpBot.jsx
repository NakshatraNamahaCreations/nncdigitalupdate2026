'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { KB, STARTERS, GREETING, CONTACT } from '@/data/helpbot'
import styles from './HelpBot.module.css'

const norm = (s) =>
  s.toLowerCase().replace(/[^a-z0-9₹\s]/g, ' ').replace(/\s+/g, ' ').trim()

const STOP = new Set([
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'did', 'i', 'my', 'me', 'we', 'you', 'your',
  'to', 'of', 'for', 'and', 'or', 'it', 'its', 'can', 'could', 'how', 'what', 'which', 'this',
  'that', 'with', 'on', 'in', 'at', 'as', 'be', 'have', 'has', 'will', 'if', 'about', 'please',
  'need', 'want', 'tell', 'show', 'give', 'there', 'any',
])

const GREET_RE = /^(hi|hii+|hey+|hello|helo|heya|namaste|hola|good (morning|afternoon|evening))\b/
const THANKS_RE = /\b(thanks|thank you|thank u|thankyou|thx|ty)\b/
const HUMAN_RE = /\b(human|agent|representative|real person|talk to (a|someone|you)|speak to)\b/

function findEntry(text) {
  const t = norm(text)
  if (!t) return null
  const tokens = new Set(t.split(' ').filter((w) => w && !STOP.has(w)))
  let best = null
  let bestScore = 0
  for (const e of KB) {
    let score = 0
    for (const intent of e.intents) {
      const ni = norm(intent)
      if (!ni) continue
      if (t.includes(ni)) {
        score += 4 + ni.split(' ').length // intent phrase appears in the question
      } else if (t.length >= 4 && ni.includes(t)) {
        score += 3 + t.split(' ').length // the question appears inside an intent
      } else {
        const words = ni.split(' ').filter((w) => !STOP.has(w))
        const overlap = words.filter((w) => tokens.has(w)).length
        score += overlap && overlap === words.length ? overlap * 2 : overlap
      }
    }
    norm(e.question)
      .split(' ')
      .forEach((w) => {
        if (w.length > 3 && !STOP.has(w) && tokens.has(w)) score += 0.5
      })
    if (score > bestScore) {
      bestScore = score
      best = e
    }
  }
  return bestScore >= 3 ? best : null
}

function suggestionsFor(entry) {
  if (entry) {
    const related = KB.filter((e) => e.topic === entry.topic && e.id !== entry.id)
      .slice(0, 3)
      .map((e) => e.question)
    if (related.length) return related
  }
  return STARTERS.slice(0, 4)
}

function reply(text) {
  const t = norm(text)
  if (HUMAN_RE.test(t)) {
    return {
      text: `Of course. You can reach our team on ${CONTACT.phone} (${CONTACT.hours}) or email ${CONTACT.email}.`,
      link: { label: 'Contact support', href: '/support/contact' },
      suggestions: STARTERS.slice(0, 4),
    }
  }
  if (GREET_RE.test(t)) {
    return {
      text: 'Hello! How can I help? You can ask about pricing, features, the free trial, or pick a question below.',
      suggestions: STARTERS.slice(0, 4),
    }
  }
  if (THANKS_RE.test(t)) {
    return {
      text: "You're welcome! Is there anything else I can help you with?",
      suggestions: STARTERS.slice(0, 4),
    }
  }
  const entry = findEntry(text)
  if (entry) {
    return { text: entry.answer, link: entry.link, suggestions: suggestionsFor(entry) }
  }
  return {
    text: `I'm not fully sure about that one. You can browse the Help center, or reach our team on ${CONTACT.phone} or ${CONTACT.email}.`,
    link: { label: 'Help center', href: '/support/help-center' },
    suggestions: STARTERS.slice(0, 4),
  }
}

const Send = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
)

// Floating WhatsApp shortcut, stacked directly above the chat launcher.
const WA_NUMBER = '919164566466'
const WA_TEXT = 'Hi NNC, I would like to know more about NNC CRM.'
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`

const WhatsAppMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.93 9.93 0 0 0 4.87 1.25h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 1.87c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 0 1-4.11-1.13l-.3-.17-3.07.8.82-2.99-.19-.31a8.03 8.03 0 0 1-1.24-4.29c0-4.46 3.63-8.09 8.1-8.09zm-4.6 4.06c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.33c.16.22 2.25 3.44 5.46 4.69 2.66 1.05 3.2.84 3.78.79.58-.05 1.87-.76 2.13-1.5.26-.74.26-1.38.19-1.5-.08-.13-.3-.21-.61-.37-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-1 1.24-.18.21-.37.24-.68.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.19-.31-.02-.48.14-.64.14-.14.32-.37.47-.56.16-.18.21-.31.32-.53.1-.21.05-.4-.03-.56-.08-.16-.7-1.76-.99-2.4-.25-.57-.5-.56-.71-.57h-.62z" />
  </svg>
)

// showWhatsApp: the site-wide lead chat now owns the WhatsApp entry point, so
// this shortcut is suppressed where that chat is present to avoid stacking
// three floating buttons in the same corner.
export default function HelpBot({ showWhatsApp = true }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }])
  const [suggestions, setSuggestions] = useState(STARTERS)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const ask = useCallback((text) => {
    const q = text.trim()
    if (!q) return
    setMessages((m) => [...m, { from: 'user', text: q }])
    setSuggestions([])
    setTyping(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const r = reply(q)
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: r.text, link: r.link }])
      setSuggestions(r.suggestions || [])
    }, 550)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    ask(input)
    setInput('')
  }

  return (
    <>
      {showWhatsApp && (
      <a
        className={`${styles.wa} ${open ? styles.waHidden : ''}`}
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NNC on WhatsApp"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
      >
        <WhatsAppMark />
        <span className={styles.waTip}>Chat on WhatsApp</span>
      </a>
      )}

      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close help chat' : 'Open help chat'}
        aria-expanded={open}
      >
        <svg className={styles.fabChat} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
        <svg className={styles.fabClose} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        role="dialog"
        aria-label="NNC help chat"
        aria-hidden={!open}
      >
        <header className={styles.head}>
          <span className={styles.avatar}>
            <img src="/nnc-mark.png" alt="" aria-hidden="true" />
          </span>
          <div className={styles.headText}>
            <span className={styles.headName}>NNC assistant</span>
            <span className={styles.headStatus}><i />Online now</span>
          </div>
          <button type="button" className={styles.headClose} onClick={() => setOpen(false)} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </header>

        <div className={styles.body} ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`${styles.row} ${m.from === 'user' ? styles.rowUser : ''}`}>
              <div className={`${styles.bubble} ${m.from === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
                {m.text}
                {m.link && (
                  <a
                    className={styles.bubbleLink}
                    href={m.link.href}
                    {...(m.link.href === '#start' ? { 'data-trial': '' } : {})}
                  >
                    {m.link.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className={styles.row}>
              <div className={`${styles.bubble} ${styles.bubbleBot} ${styles.typing}`}>
                <span /><span /><span />
              </div>
            </div>
          )}

          {!typing && suggestions.length > 0 && (
            <div className={styles.chips}>
              {suggestions.map((s) => (
                <button key={s} type="button" className={styles.chip} onClick={() => ask(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form className={styles.inputRow} onSubmit={onSubmit}>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            aria-label="Type your question"
          />
          <button type="submit" className={styles.sendBtn} aria-label="Send" disabled={!input.trim()}>
            <Send />
          </button>
        </form>
      </div>
    </>
  )
}
