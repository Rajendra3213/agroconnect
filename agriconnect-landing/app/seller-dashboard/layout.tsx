import { redirect } from 'next/navigation'

export default function SellerDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is a placeholder for your actual authentication logic
  const isAuthenticated = true // Replace with your actual auth check
  const userType = 'seller' // Replace with actual user type check

  if (!isAuthenticated) {
    redirect('/login')
  }

  if (userType !== 'seller') {
    redirect('/') // or to an appropriate error page
  }

  return <>{children}</>
}

