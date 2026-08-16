import React from 'react'

const AboutSection = () => {
    return (
        <section id="about" className="relative w-full py-24">
            <div className="mx-auto max-w-4xl px-4 text-center sm:text-left">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    About <span className="text-primary">me</span>
                </h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                    <p>
                        I've been building things with code for much longer than I've been doing it professionally. What started with a small driving game eventually turned into experimenting with electronics, programming inside games, building websites, and eventually working as a full-stack developer.

                        I still approach programming in much the same way — find something interesting, figure out how it works, and build something with it.
                    </p>

                    <p>
                        I focus on writing maintainable code and creating experiences that feel
                        smooth and intuitive. I&apos;m always exploring new tools and patterns
                        to improve how I build for the web.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 text-sm">
                        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-300">
                            English
                        </div>
                        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-300">
                            Russian
                        </div>
                        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-300">
                            Latvian
                        </div>
                        <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-300">
                            Spanish
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection
