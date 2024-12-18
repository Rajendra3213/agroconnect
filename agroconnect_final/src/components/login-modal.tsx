'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  userType: z.enum(['buyer', 'seller']),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginModal({ isOpen, onClose, onSwitchToSignup }: { 
  isOpen: boolean
  onClose: () => void
  onSwitchToSignup: () => void
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer')
  
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userType: 'buyer',
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real application, you would validate credentials here
      // and receive a token or session identifier from your backend

      // For now, we'll just simulate a successful login
      const userType = data.userType
      
      // Redirect to the appropriate dashboard
      if (userType === 'buyer') {
        router.push('/buyer-dashboard')
      } else {
        router.push('/seller-dashboard')
      }
      
      onClose()
    } catch (error) {
      console.error(error)
      // Here you would handle login errors, such as displaying an error message
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogTitle className="text-xl font-semibold">Welcome Back</DialogTitle>
        <DialogDescription>
          Sign in to your AgriConnect account
        </DialogDescription>
        <RadioGroup 
          defaultValue="buyer" 
          className="flex justify-center gap-6 mb-4"
          onValueChange={(value) => {
            setUserType(value as 'buyer' | 'seller')
            setValue('userType', value as 'buyer' | 'seller')
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="buyer" id="login-buyer" />
            <Label htmlFor="login-buyer" className="font-medium">Buyer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="seller" id="login-seller" />
            <Label htmlFor="login-seller" className="font-medium">Seller</Label>
          </div>
        </RadioGroup>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link 
                href="/forgot-password" 
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              `Sign in as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`
            )}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-primary hover:underline"
          >
            Create one
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

