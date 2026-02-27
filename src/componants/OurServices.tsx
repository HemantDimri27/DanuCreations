'use client'
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Service {
    id: number,
    title: string,
    description: string,
    image: string,
    slug: string,
    isFeatured: boolean,
}

const photographyServices: Service[] = [
    {
        id: 1,
        title: "Wedding Photography",
        description: "Capture your special day with stunning imagery. From candid moments to posed portraits, we document every emotion and celebration of your wedding journey.",
        image: "/services/wedding/wedding_image_1.jpg",
        slug: "wedding-photography",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Portrait Photography",
        description: "Professional portraits that capture your personality and essence. Perfect for family photos, individual portraits, and professional headshots.",
        image: "/services/wedding/wedding_image_1.jpg",
        slug: "portrait-photography",
        isFeatured: true,
    },
    {
        id: 3,
        title: "Pre-Wedding Shoots",
        description: "Romantic and creative pre-wedding photography sessions at scenic locations. Tell your love story through beautiful images.",
        image: "/services/wedding/wedding_image_1.jpg",
        slug: "pre-wedding-shoots",
        isFeatured: true,
    },
    {
        id: 4,
        title: "Event Photography",
        description: "Comprehensive coverage of corporate events, birthday parties, anniversaries, and celebrations. We capture every memorable moment.",
        image: "/services/wedding/wedding_image_1.jpg",
        slug: "event-photography",
        isFeatured: true,
    },
    {
        id: 5,
        title: "Product Photography",
        description: "High-quality product images for e-commerce, catalogs, and advertising. Make your products stand out with professional photography.",
        image: "/services/wedding/wedding_image_1.jpg",
        slug: "product-photography",
        isFeatured: true,
    },
    {
        id: 6,
        title: "Commercial Photography",
        description: "Professional photography for businesses, real estate, and commercial projects. Elevate your brand with stunning visuals.",
        image: "/services/wedding/wedding_image_1.jpg",
        slug: "commercial-photography",
        isFeatured: true,
    },
]

function OurServices() {
    const featuredServices = photographyServices.filter((service: Service) => service.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
                    Our Services
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Professional Photography Services
                </p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredServices.map((service: Service) => (
                    <div key={service.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="relative w-full h-48">
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {service.title}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                    {service.description}
                                </p>
                                <Link href={`/services/${service.slug}`} className="mt-4">
                                    <button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/services"}
                className="px-6 py-3 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 inline-block"
            >
                View All Services
            </Link>
        </div>
    </div>
  )
}

export default OurServices