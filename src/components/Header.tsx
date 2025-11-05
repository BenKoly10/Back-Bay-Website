import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

// Helper to produce hash-based hrefs that match client routing and SSR
const hashHref = (path: string) => {
  // ensure leading slash + hash
  const p = String(path || '/').replace(/^\/+/, '')
  return `/#/${p}`.replace(/\/\/+$/, '/')
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 px-6 py-4 flex items-center justify-between text-white z-30 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-gray-900 shadow-2xl' : 'bg-linear-to-b from-black/60 via-black/40 to-transparent backdrop-blur-md'}`}>
        {/* Logo on the left */}
        <h1 className="text-xl font-semibold transform hover:scale-105 transition-transform duration-300">
          <a href={hashHref('/')} className="block">
            {/* Use base-aware URL for logo so it loads on GitHub Pages */}
            <img
              src={`${(import.meta.env.BASE_URL || '/').replace(/\/+$/, '')}/logo-transparent.png`}
              alt="Back Bay Blues"
              className="h-14 md:h-16 drop-shadow-lg"
            />
          </a>
        </h1>

        {/* Desktop navigation - hidden on mobile/tablet */}
        <nav className="hidden lg:flex items-center gap-4 mr-4">
          <a
            href={hashHref('/')}
            className="px-5 py-2.5 rounded-lg font-medium text-white hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-105 border border-transparent hover:border-[rgb(248,219,135)]/30"
          >
            Home
          </a>
          <a
            href={hashHref('upcoming-events')}
            className="px-5 py-2.5 rounded-lg font-medium text-white hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-105 border border-transparent hover:border-[rgb(248,219,135)]/30"
          >
            Upcoming Events
          </a>
          <a
            href={hashHref('book-now')}
            className="px-5 py-2.5 rounded-lg font-medium text-white hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-105 border border-transparent hover:border-[rgb(248,219,135)]/30"
          >
            Book Now
          </a>
        </nav>

        {/* Hamburger menu - visible only on mobile/tablet, positioned on the right */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2.5 hover:bg-white/10 rounded-lg transition-all duration-300 lg:hidden hover:scale-110"
          aria-label="Open menu"
        >
          <Menu size={26} className="drop-shadow-md" />
        </button>
      </header>

      {/* Mobile/Tablet sidebar menu - slides in from right */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-all duration-500 ease-out flex flex-col lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[rgb(248,219,135)]/30 bg-gray-800/50">
          <h2 className="text-2xl font-bold text-[rgb(248,219,135)]">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:rotate-90 hover:scale-110"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-6 overflow-y-auto">
          <a
            href={hashHref('/')}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 mb-3 border border-transparent hover:border-[rgb(248,219,135)]/30 hover:translate-x-1"
          >
            <span className="font-medium text-lg">Home</span>
          </a>
          <a
            href={hashHref('upcoming-events')}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 mb-3 border border-transparent hover:border-[rgb(248,219,135)]/30 hover:translate-x-1"
          >
            <span className="font-medium text-lg">Upcoming Events</span>
          </a>

          <a
            href={hashHref('book-now')}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 mb-3 border border-transparent hover:border-[rgb(248,219,135)]/30 hover:translate-x-1"
          >
            <span className="font-medium text-lg">Book Now</span>
          </a>
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
