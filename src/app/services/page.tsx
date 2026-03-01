import Image from "next/image"
import Link from "next/link"
import { photographyServices } from "@/data/services"

export const metadata = {
    title: "Our Services | Danu Creations",
    description: "Explore our full range of professional photography services including wedding, portrait, pre-wedding, event, product, and commercial photography.",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-900 pt-28 pb-20 px-6">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                    What We Offer
                </h2>
                <h1 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                    All Photography Services
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-400">
                    From intimate portraits to grand wedding celebrations, our expert team is ready to capture your most important moments.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {photographyServices.map((service) => (
                    <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="group flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-900/30"
                    >
                        <div className="relative w-full h-52 overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-200">
                                {service.title}
                            </h2>
                            <p className="text-sm text-neutral-400 flex-grow leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-5 self-start">
                                <span className="inline-block px-4 py-2 rounded border border-teal-600 text-teal-400 text-sm font-medium group-hover:bg-teal-600 group-hover:text-white transition-all duration-200">
                                    Learn More →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Back to Home */}
            <div className="mt-16 text-center">
                <Link
                    href="/"
                    className="px-6 py-3 rounded border border-zinc-600 text-neutral-300 hover:border-teal-600 hover:text-teal-400 transition duration-200 inline-block text-sm"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    )
}
