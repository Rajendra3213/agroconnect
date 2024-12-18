'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const baseSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Address is required'),
  dateOfBirth: z.string().refine((dob) => new Date(dob) < new Date(), 'Invalid date of birth'),
})

const sellerSchema = baseSchema.extend({
  farmName: z.string().min(2, 'Farm name is required'),
  farmAddress: z.string().min(5, 'Farm address is required'),
})

const buyerSchema = baseSchema

const formSchema = z.discriminatedUnion('userType', [
  z.object({ userType: z.literal('buyer'), ...buyerSchema.shape }),
  z.object({ userType: z.literal('seller'), ...sellerSchema.shape }),
]).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type FormData = z.infer<typeof formSchema>

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: { 
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: 'buyer',
    },
  })

  const userType = watch('userType')

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true)
      // Here you would make your API call to sign up the user
      console.log(data)
      // Simulate successful signup
      if (data.userType === 'seller') {
        router.push('/seller-dashboard')
      } else {
        router.push('/buyer-dashboard') // You'll need to create this route and component
      }
      onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-xl font-bold text-center sticky top-0 bg-white pt-6 pb-2">
          Create an Account
        </DialogTitle>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <RadioGroup 
            defaultValue="buyer" 
            className="flex justify-center gap-6"
            onValueChange={(value) => setValue('userType', value as 'buyer' | 'seller')}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buyer" id="buyer" />
              <Label htmlFor="buyer" className="font-medium">Buyer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="seller" id="seller" />
              <Label htmlFor="seller" className="font-medium">Seller</Label>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register('fullName')} />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
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
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" {...register('phoneNumber')} />
            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register('address')} />
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>

          {userType === 'seller' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="farmName">Farm Name</Label>
                <Input id="farmName" {...register('farmName')} />
                {errors.farmName && <p className="text-sm text-red-500">{errors.farmName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmAddress">Farm Address</Label>
                <Input id="farmAddress" {...register('farmAddress')} />
                {errors.farmAddress && <p className="text-sm text-red-500">{errors.farmAddress.message}</p>}
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" type="date" {...register('dateOfBirth')} />
            {errors.dateOfBirth && <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground sticky bottom-0 bg-white pb-6 pt-2">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-primary hover:underline font-semibold"
          >
            Log in
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

