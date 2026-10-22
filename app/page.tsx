"use client"

import { useChat } from 'ai/react'
import styles from './page.module.css'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, isLoading} = useChat({ 
      api: "/api/chat" 
  })
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>01</div>
        <div className={styles.headerText}>
          <span className={styles.brandName}>01 Digital Hub</span>
          <span className={styles.status}>● Online</span>
        </div>
      </div>
      <div className={styles.messages}> 
          {messages.length === 0 && (
            <div className={styles.welcomeMessage}>
              <h2>Welcome to 01 Digital Hub!</h2>
              <p>Ask me about our phones and laptops.</p>
            </div>
          )}
        {messages.map((message) => (
          <div key={message.id}
          className={`${styles.messageBubble} ${message.role === 'user' ? styles.userBubble : styles.assistantBubble}`}>
            <strong>{message.role}:</strong> {message.content}
          </div>
        ))}
        {isLoading && <div>Thinking...</div>}
      </div>
      <div className={styles.inputArea}>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
        className={styles.input}
          value={input}
          onChange={handleInputChange}
          placeholder="Ask ME about our phones and laptops..."
        />
        <button type="submit"
        className={styles.sendButton}
        disabled={isLoading || !input.trim()}
        >Send
        </button>
      </form>
      </div>
    </div>
    </>
  )
}