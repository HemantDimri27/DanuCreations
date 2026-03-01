'use client'
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"
import { photographyServices, Service } from "@/data/services"

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
                                    <button className="px-4 py-2 rounded border border-teal-600 text-white bg-zinc-800 hover:bg-teal-600 transition duration-200">
                                        View More
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
                className="px-6 py-3 rounded border border-teal-600 text-white bg-zinc-800 hover:bg-teal-600 transition duration-200 inline-block"
            >
                View All Services
            </Link>
        </div>
    </div>
  )
}

export default OurServices