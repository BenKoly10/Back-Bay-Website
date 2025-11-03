import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/upcoming-events')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Upcoming Events
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12">
          Check out where we'll be performing next and come see us live!
        </p>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=backbaytrio%40gmail.com&ctz=America%2FNew_York&color=%239fe1e7"
            className="w-full h-[600px] md:h-[700px] border-0"
            title="Back Bay Music Events Calendar"
          />
        </div>
      </div>
    </div>
  )
}
