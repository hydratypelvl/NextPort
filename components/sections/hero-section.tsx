import React from 'react'
import DashedCenterGrid from "@/components/dashed-center-grid";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full">
            <DashedCenterGrid />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-4 pt-24 text-center sm:flex-row sm:gap-16 sm:pt-0 sm:text-left">

                <div className="max-w-xl">
                    <div className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-300">
                        Full-Stack Developer
                    </div>

                    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Hey there, <span className="block text-primary neon-pulse">I&apos;m Rihards!</span>
                    </h1>

                    <p className="mt-6 text-base font-medium text-gray-400 sm:text-lg lg:text-xl">
                        Building modern web applications with{' '}
                        <span className="text-primary">React</span>,{' '}
                        <span className="text-primary">Next.js</span> &{' '}
                        <span className="text-primary">TypeScript</span>.
                        ~3 years of professional experience across frontend and backend.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                        <a href="#projects">
                            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,246,255,0.4)] hover:shadow-[0_0_30px_rgba(0,246,255,0.6)] transition-all duration-300">
                                View Projects
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button size="lg" variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)] transition-all duration-300">
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="shrink-0 sm:self-center">
                    <div className="relative float">
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                        <Image
                            className="relative rounded-full shadow-[0_0_40px_rgba(0,246,255,0.3)] ring-2 ring-primary/30 hover:ring-primary/60 hover:shadow-[0_0_60px_rgba(0,246,255,0.5)] transition-all duration-500"
                            src="/portrait.png"
                            alt="Portrait image of Rihards Ādminis"
                            width={220}
                            height={220}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection
