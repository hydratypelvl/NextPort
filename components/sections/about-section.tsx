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
                        Full-Stack Developer with approximately 3 years of professional experience
                        building web applications across frontend and backend development. Experienced
                        with <span className="text-primary">React</span>,{' '}
                        <span className="text-primary">Next.js</span>,{' '}
                        <span className="text-primary">TypeScript</span>,{' '}
                        <span className="text-primary">Laravel</span> and{' '}
                        <span className="text-primary">Vue.js</span>, with hands-on experience
                        in REST APIs, responsive UI and database integration.
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
