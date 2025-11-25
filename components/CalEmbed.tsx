'use client'

import { useEffect } from 'react'

interface CalEmbedProps {
  calLink?: string
  className?: string
  config?: {
    theme?: 'light' | 'dark' | 'auto'
    layout?: 'month_view' | 'column_view'
  }
}

export function CalEmbed({
  calLink = 'flow-amplified/30min',
  className = '',
  config = { theme: 'dark', layout: 'month_view' },
}: CalEmbedProps) {
  useEffect(() => {
    // Check if Cal.com script already exists
    const existingScript = document.querySelector('script[src*="cal.com/embed"]')
    if (existingScript) {
      return
    }

    // Load Cal.com embed script
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    script.onload = () => {
      console.log('Cal.com embed script loaded')
      // Initialize Cal after script loads
      if (window.Cal) {
        window.Cal('init', { origin: 'https://app.cal.com' })
      }
    }
    script.onerror = () => {
      console.error('Failed to load Cal.com embed script')
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      const calElements = document.querySelectorAll('[data-cal-link]')
      calElements.forEach((el) => el.remove())
    }
  }, [])

  return (
    <div
      className={className}
      data-cal-link={calLink}
      data-cal-config={JSON.stringify(config)}
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
    />
  )
}

// Extend Window interface for Cal
declare global {
  interface Window {
    Cal?: (action: string, options: any) => void
  }
}
