import React from 'react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

const ContactSection = () => {
    return (
        <section className="relative w-full py-24">
            <div className="mx-auto max-w-3xl px-4 text-center">

                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Let&apos;s work <span className="text-primary">together</span>
                </h2>

                <p className="mt-4 text-gray-400 sm:text-lg">
                    Have a project in mind, a question, or just want to say hi?
                    Feel free to reach out — I&apos;m always open to new opportunities.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:justify-center">
                    <a
                        href="mailto:rihards.adm@gmail.com"
                        className="group flex flex-col items-center gap-2 rounded-xl border border-cyan-400/10 bg-card p-5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
                    >
                        <Mail size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]" />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Email</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/rihards-adminis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2 rounded-xl border border-cyan-400/10 bg-card p-5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
                    >
                        <Linkedin size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]" />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/hydratypelvl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2 rounded-xl border border-cyan-400/10 bg-card p-5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
                    >
                        <Github size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]" />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                    </a>

                    <a
                        href="tel:+37125156865"
                        className="group flex flex-col items-center gap-2 rounded-xl border border-cyan-400/10 bg-card p-5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
                    >
                        <Phone size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]" />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Phone</span>
                    </a>
                </div>
            </div>
        </section>

    )
}
export default ContactSection
