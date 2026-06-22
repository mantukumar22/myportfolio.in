'use client'

import React, { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  id?: string
}

export default function TypingAnimation({ texts, id }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    if (texts.length === 0) return

    const handleTyping = () => {
      const fullText = texts[currentTextIndex]
      
      if (!isDeleting) {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(100)

        if (currentText === fullText) {
          // Finish typing, pause before delete
          setIsDeleting(true)
          setTypingSpeed(2000)
        }
      } else {
        // Deleting text
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(50)

        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setTypingSpeed(500)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed])

  return (
    <span id={id} className="font-mono text-indigo-600 border-r-2 border-indigo-600 pr-1 cursor-blink">
      {currentText}
    </span>
  )
}
