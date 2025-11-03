import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({ component: App })

// Base-aware asset helper
const withBase = (path: string) => new URL(path, import.meta.env.BASE_URL).href

const bandImages = [
  withBase('Band-Pictures/2D49E183-ADD1-4009-92BE-0366AC1E0852.jpeg'),
  withBase('Band-Pictures/3339aa.jpeg'),
  withBase('Band-Pictures/9331a.jpeg'),
  withBase('Band-Pictures/CRG_3326-3.jpg'),
]

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bandImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bandImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + bandImages.length) % bandImages.length)
  }

  return (
    <div>
      <div className="relative w-screen h-screen">
        <img src={withBase('homepage.jpeg')} alt="Band Group Photo" className="w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            Back Bay Music
          </h1>
        </div>
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Carousel on the left */}
          <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden group">
            <img
              src={bandImages[currentImageIndex]}
              alt={`Band photo ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Carousel navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              ›
            </button>
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {bandImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* About Us content on the right */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Back Bay Music is a group of young musicians from Sussex County Delaware. We have been playing together since 2018, and study music at University of Delaware. We love bringing the energy at weddings, events, and restaurants across Delmarva. When we aren't gigging, we can seen performing in University of Delaware's top jazz ensembles, as well as playing in many other local acts. Come check us out and support local musicians!
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Watch Us Perform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-video bg-gray-300 rounded-lg overflow-hidden mb-4">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/9WyDnsT3LKo"
                  title="Watermelon Man"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Watermelon Man</h3>
              <p className="text-gray-600">Performed at North East River Yacht Club</p>
            </div>

            {/* Video 2 */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-video bg-gray-300 rounded-lg overflow-hidden mb-4">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/DnZWYXXr1QY"
                  title="Forget You"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Forget You</h3>
              <p className="text-gray-600">Performed at Bethany Blues</p>
            </div>

            {/* Video 3 */}
            <div className="flex flex-col">
              <div className="relative w-full aspect-video bg-gray-300 rounded-lg overflow-hidden mb-4">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/rz32EJosYjc"
                  title="Valerie"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Valerie</h3>
              <p className="text-gray-600">Performed at Blue Coast</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
