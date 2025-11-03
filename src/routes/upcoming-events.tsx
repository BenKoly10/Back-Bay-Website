import { createFileRoute } from '@tanstack/react-router'
import { withBase } from '../lib/utils'

export const Route = createFileRoute('/upcoming-events')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] overflow-hidden">
                <img
                    src={withBase('Band-Pictures/3339aa.jpeg')}
                    alt="Back Bay Music performing live"
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-16">
                    <div className="text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-4">
                            Upcoming Events
                        </h1>
                        <p className="text-xl md:text-2xl text-white drop-shadow-lg">
                            Check out where we'll be performing next and come see us live!
                        </p>
                    </div>
                </div>
            </div>

            {/* Calendar Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=backbaytrio%40gmail.com&ctz=America%2FNew_York&color=%239fe1e7"
                            className="w-full h-[600px] md:h-[700px] border-0"
                            title="Back Bay Music Events Calendar"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
