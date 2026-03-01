import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { photographyServices } from "@/data/services"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return photographyServices.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const service = photographyServices.find((s) => s.slug === slug)
    if (!service) return { title: "Service Not Found" }
    return {
        title: `${service.title} | Danu Creations`,
        description: service.description,
    }
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params
    const service = photographyServices.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    // Other services to show at bottom
    const otherServices = photographyServices.filter((s) => s.slug !== slug).slice(0, 3)

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
                        Our Services
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
                        {service.title}
                    </h1>
                </div>
                {/* Navigation pill */}
                <div className="absolute top-6 left-6">
                    <Link
                        href="/services"
                        className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm hover:border-teal-500 hover:text-teal-400 transition-all duration-200"
                    >
                        ← All Services
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Description */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-14">
                    <h2 className="text-2xl font-bold text-teal-400 mb-4">About This Service</h2>
                    <p className="text-neutral-300 leading-relaxed text-lg">
                        {service.longDescription || service.description}
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-teal-900/40 to-gray-900 border border-teal-800/50 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Ready to Book?</h2>
                    <p className="text-neutral-400 mb-6">
                        Let&apos;s discuss your vision and create something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-teal-900/40"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Other Services */}
            <div className="bg-zinc-950 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">
                        Explore Other Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {otherServices.map((s) => (
                            <Link
                                key={s.id}
                                href={`/services/${s.slug}`}
                                className="group flex flex-col rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-teal-600 transition-all duration-300"
                            >
                                <div className="relative w-full h-40 overflow-hidden">
                                    <Image
                                        src={s.image}
                                        alt={s.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-white font-semibold group-hover:text-teal-400 transition-colors duration-200">
                                        {s.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            href="/services"
                            className="px-6 py-3 rounded border border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white transition duration-200 inline-block text-sm"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
