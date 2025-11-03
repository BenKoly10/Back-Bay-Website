import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us!
        </h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-8 text-lg">
          {/* Phone */}
          <a 
            href="tel:302-217-0017" 
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Phone size={20} />
            <span>302-217-0017</span>
          </a>

          <span className="hidden md:inline text-gray-500">|</span>

          {/* Email */}
          <a 
            href="mailto:backbaytrio@gmail.com" 
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Mail size={20} />
            <span>backbaytrio@gmail.com</span>
          </a>

          <span className="hidden md:inline text-gray-500">|</span>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/BackBayMusic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Facebook size={20} />
            <span>Back Bay Music</span>
          </a>

          <span className="hidden md:inline text-gray-500">|</span>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/backbaymusic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Instagram size={20} />
            <span>@backbaymusic</span>
          </a>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Back Bay Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
