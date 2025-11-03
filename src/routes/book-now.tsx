import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/book-now')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Book Back Bay Music
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12">
          Interested in having us perform at your event? Fill out the form below and we'll get back to you as soon as possible!
        </p>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd8VhoVVrr0JPa8Uwm5bWXLIMIo6N31zEW4uVbEULV6FCI4TQ/viewform?embedded=true"
            className="w-full h-[800px] md:h-[900px] border-0"
            title="Book Back Bay Music Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}
