import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 to-black text-white py-8 px-4 md:px-8 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[rgb(248,219,135)]/5 via-transparent to-[rgb(248,219,135)]/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-linear-to-r from-white via-[rgb(248,219,135)] to-white bg-clip-text">
          Contact Us!
        </h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-8 text-base mb-6">
          {/* Phone */}
          <a 
            href="tel:302-217-0017" 
            className="group flex items-center gap-2 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
          >
            <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">302-217-0017</span>
          </a>

          <span className="hidden md:inline text-[rgb(248,219,135)]/40 text-xl">•</span>

          {/* Email */}
          <a 
            href="mailto:backbaytrio@gmail.com" 
            className="group flex items-center gap-2 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">backbaytrio@gmail.com</span>
          </a>

          <span className="hidden md:inline text-[rgb(248,219,135)]/40 text-xl">•</span>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/BackBayMusic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
          >
            <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Back Bay Music</span>
          </a>

          <span className="hidden md:inline text-[rgb(248,219,135)]/40 text-xl">•</span>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/backbaymusic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
          >
            <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">@backbaymusic</span>
          </a>
        </div>

        <div className="text-center">
          <div className="inline-block px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-[rgb(248,219,135)]/20">
            <p className="text-gray-300 text-xs">
              &copy; {new Date().getFullYear()} Back Bay Music. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
