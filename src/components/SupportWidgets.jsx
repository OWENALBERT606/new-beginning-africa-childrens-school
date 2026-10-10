import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Send, X } from 'lucide-react'
import { fallback, findAnswer, greeting, topics, whatsappUrl } from '../data/chatbot.js'

const chips = topics.filter((topic) => topic.chip)

function WhatsAppIcon({ size = 28 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function AnswerLinks({ links, onNavigate }) {
  if (!links?.length) return null
  return (
    <span className="chat__links">
      {links.map((link) =>
        link.to ? (
          <Link key={link.label} to={link.to} onClick={onNavigate}>
            {link.label}
          </Link>
        ) : (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            {link.label}
          </a>
        ),
      )}
    </span>
  )
}

// Floating help: a WhatsApp button and a website helper that answers from a
// fixed list of replies (see data/chatbot.js). No AI is involved.
function SupportWidgets() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([{ from: 'bot', ...greeting }])
  const logRef = useRef(null)

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [messages, open])

  const ask = (question, answer = findAnswer(question)) => {
    setMessages((current) => [...current, { from: 'user', text: question }, { from: 'bot', ...answer }])
  }

  const submit = (event) => {
    event.preventDefault()
    const question = draft.trim()
    if (!question) return
    ask(question)
    setDraft('')
  }

  return (
    <div className="support">
      {open && (
        <section className="chat" role="dialog" aria-label="Website helper">
          <header className="chat__head">
            <div>
              <strong>New Beginning helper</strong>
              <span>Answers from this website</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close helper">
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="chat__log" ref={logRef} aria-live="polite">
            {messages.map((message, index) => (
              <p className={`chat__msg chat__msg--${message.from}`} key={index}>
                {message.text}
                <AnswerLinks links={message.links} onNavigate={() => setOpen(false)} />
              </p>
            ))}
          </div>

          <div className="chat__chips">
            {chips.map((topic) => (
              <button type="button" key={topic.id} onClick={() => ask(topic.chip, topic)}>
                {topic.chip}
              </button>
            ))}
            <button type="button" onClick={() => ask('Talk to a person', { ...fallback, text: 'You can reach the school office directly:' })}>
              Talk to a person
            </button>
          </div>

          <form className="chat__form" onSubmit={submit}>
            <label className="sr-only" htmlFor="chat-input">
              Type your question
            </label>
            <input
              id="chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type your question…"
              autoComplete="off"
              autoFocus
            />
            <button type="submit" aria-label="Send">
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        className="support__btn support__btn--chat"
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Close website helper' : 'Open website helper'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={26} aria-hidden="true" /> : <MessageCircle size={26} aria-hidden="true" />}
      </button>

      <a
        className="support__btn support__btn--whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="support__label">WhatsApp us</span>
      </a>
    </div>
  )
}

export default SupportWidgets
