import { createFileRoute, Link } from '@tanstack/react-router'
import { withBase } from '../lib/utils'

export const Route = createFileRoute('/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={withBase('Band-Pictures/9331a.jpeg')} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16">
        <h1 className="text-9xl md:text-[12rem] font-bold text-[rgb(248,219,135)] drop-shadow-2xl mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Page Not Found
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Looks like this page took a wrong turn. Let's get you back on track!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="px-8 py-4 rounded-lg font-medium text-gray-900 bg-linear-to-r from-[rgb(248,219,135)] to-[rgb(238,209,125)] shadow-lg shadow-[rgb(248,219,135)]/50 hover:scale-105 transition-all duration-300 border border-[rgb(248,219,135)]/50"
          >
            Go Home
          </Link>
          <Link
            to="/upcoming-events"
            className="px-8 py-4 rounded-lg font-medium text-white hover:bg-white/10 hover:text-[rgb(248,219,135)] transition-all duration-300 hover:scale-105 border border-white/30 hover:border-[rgb(248,219,135)]/50"
          >
            View Events
          </Link>
        </div>
      </div>
    </div>
  )
}
