import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">AgriConnect</h3>
            <p className="text-sm mb-4">
              Empowering agricultural trade through innovative B2B solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Marketplace</Link></li>
              <li><Link href="#" className="hover:text-white">Supply Chain</Link></li>
              <li><Link href="#" className="hover:text-white">Analytics</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white">Guides</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          © {currentYear} AgriConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

