import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <main className="w-full desktop:h-4/5 flex py-5 flex-col-reverse desktop:flex-row z-0">
            <div className="desktop:w-3/4 flex flex-col items-center desktop:items-start desktop:px-28 justify-center gap-6 z-0 relative">
                <h1 className="text-secondary text-5xl desktop:text-[5rem] w-full py-5 font-heavy text-center desktop:hidden">
                    Make remote work
                </h1>
                <h1 className="text-secondary desktop:text-[5rem] w-full py-5 font-extrabold justify-start hidden desktop:flex">
                    Make <br /> remote work
                </h1>
                <p className="text-xl font-normal px-6 desktop:px-0 text-center desktop:w-3/5 desktop:text-start desktop:text-2xl">
                    Get teal in sync, no matter your location. Streamline processes, create team ritual, and watch productivity soar.
                </p>
                <Link href={'/'} className="bg-secondary text-background rounded-3xl px-10 py-5 text-lg font-heavy hover:text-secondary hover:bg-background transition-colors duration-300 mt-2 border border-secondary">Learn More</Link>
                <div className="flex w-full gap-5 desktop:gap-20 justify-between px-6 desktop:justify-start desktop:px-28 items-center py-5 desktop:absolute desktop:bottom-0 desktop:left-0">
                    <Link href={'/'} className="cursor-pointer">
                        <Image src={'/images/1-client-databiz.svg'} width={114} height={20} alt="databiz"/>
                    </Link>
                    <Link href={'/'} className="cursor-pointer">
                        <Image src={'/images/2-client-audiophile.svg'} width={73} height={36} alt="audiophile"/>
                    </Link>
                    <Link href={'/'} className="cursor-pointer">
                        <Image src={'/images/3-client-meet.svg'} width={90} height={20} alt="meet"/>
                    </Link>
                    <Link href={'/'} className="cursor-pointer">
                        <Image src={'/images/4-client-maker.svg'} width={83} height={24} alt="maker"/>
                    </Link>
                </div>
            </div>
            <div className="desktop:w-1/2 desktop:flex desktop:items-end">
                <Image src={'/images/image-hero-mobile.png'} width={740} height={553} 
                className="flex desktop:hidden" alt="hero sm"/>
                <Image src={'/images/image-hero-desktop.png'} width={620} height={623} 
                className="hidden desktop:flex" alt="hero large"/>
            </div>
        </main>
    )
}