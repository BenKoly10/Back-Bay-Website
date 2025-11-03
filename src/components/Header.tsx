import { Link } from '@tanstack/react-router'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

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
      <header className={`fixed top-0 left-0 right-0 p-4 flex items-center justify-between text-white z-30 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/80 backdrop-blur-sm'}`}>
        {/* Logo on the left */}
        <h1 className="text-xl font-semibold">
          <Link to="/">
            <img src="/logo-transparent.png" alt="Back Bay Blues" className="h-15" />
          </Link>
        </h1>

        {/* Desktop navigation - hidden on mobile/tablet */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            to="/upcoming-events"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            activeProps={{
              className:
                'px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors font-medium',
            }}
          >
            Upcoming Events
          </Link>
          <Link
            to="/book-now"
            className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            activeProps={{
              className:
                'px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors font-medium',
            }}
          >
            Book Now
          </Link>
        </nav>

        {/* Hamburger menu - visible only on mobile/tablet, positioned on the right */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile/Tablet sidebar menu - slides in from right */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/upcoming-events"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Upcoming Events</span>
          </Link>

          <Link
            to="/book-now"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Book Now</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
