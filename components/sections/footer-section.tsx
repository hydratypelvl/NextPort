import React from 'react'

const FooterSection = () => {
    return (
        <footer className="relative w-full border-t border-cyan-400/10 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Rihards Ādminis. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="mailto:rihards.adm@gmail.com"
                        className="text-sm text-gray-400 transition hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/hydratypelvl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rihards-adminis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.6)]"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>

    )
}
export default FooterSection
