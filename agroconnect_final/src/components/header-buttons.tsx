'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { SignupModal } from "./signup-modal"
import { LoginModal } from "./login-modal"

export function HeaderButtons() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  const handleLoginClick = () => {
    setIsLoginOpen(true)
    setIsSignupOpen(false)
  }

  const handleSignupClick = () => {
    setIsSignupOpen(true)
    setIsLoginOpen(false)
  }

  return (
    <div className="flex gap-4">
      <Button 
        variant="outline"
        onClick={handleLoginClick}
      >
        Login
      </Button>
      <Button 
        onClick={handleSignupClick}
      >
        Sign Up
      </Button>
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false)
          setIsSignupOpen(true)
        }}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false)
          setIsLoginOpen(true)
        }}
      />
    </div>
  )
}

