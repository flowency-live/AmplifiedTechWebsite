'use client'

import { useEffect } from 'react'
import { Button } from './Button'

interface CalendlyButtonProps {
  url?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  children: React.ReactNode
}

export function CalendlyButton({
  url = 'https://calendly.com/flow-amplified',
  size = 'lg',
  variant = 'primary',
  className = '',
  children,
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded via external script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url })
    }
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={openCalendly}
    >
      {children}
    </Button>
  )
}
