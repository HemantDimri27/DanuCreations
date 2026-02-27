import Link from "next/link"
import Image from "next/image"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div 
        className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
        />
        <div className='p-4 relative z-10 w-full text-center'>
            {/* Logo */}
            <div className="mt-20 md:mt-0 flex justify-center">
                <Image 
                    src="/logo/danu-logo-3.png" 
                    alt="Danu Creations Logo" 
                    width={300} 
                    height={100}
                    className="object-contain"
                    priority
                />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Danu Creations
            </h1>
            <p className="mt-4 font-normal md:text-lg text-neutral-300 max-w-lg mx-auto">
                Capturing life&apos;s most precious moments through our lens. From weddings to portraits, we transform your memories into timeless visual stories. Let us freeze your special moments with professional photography that speaks to your heart.
            </p>
            <div className="mt-6">
                <Link href={"/portfolio"}>
                    <Button borderRadius="1.75rem" 
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        View Our Work
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection