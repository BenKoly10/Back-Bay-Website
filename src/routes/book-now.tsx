import { createFileRoute } from '@tanstack/react-router'
import { withBase } from '../lib/utils'

export const Route = createFileRoute('/book-now')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={withBase('Band-Pictures/CRG_3326-3.jpg')}
          alt="Book Back Bay Music for your event"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-16">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              Book Back Bay Music
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-lg">
              Interested in having us perform at your event? Let's make it happen!
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
            Fill out the form below and we'll get back to you as soon as possible!
          </p>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd8VhoVVrr0JPa8Uwm5bWXLIMIo6N31zEW4uVbEULV6FCI4TQ/viewform?embedded=true"
              className="w-full h-[min(80vh,1200px)] min-h-[480px] border-0"
              title="Book Back Bay Music Form"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
