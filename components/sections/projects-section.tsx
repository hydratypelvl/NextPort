import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'TurboCore',
        description: 'E-Commerce web store for computer components and gamers, featuring product browsing, cart management, and a modern shopping experience.',
        tags: ['TypeScript', 'Next.js', 'E-Commerce'],
        liveUrl: null,
        codeUrl: 'https://github.com/hydratypelvl/TurboCore',
        gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
        title: 'Spellio',
        description: 'A Wordle-inspired web application built with modern Next.js. Features word guessing gameplay with a sleek, responsive interface.',
        tags: ['TypeScript', 'Next.js', 'Game'],
        liveUrl: 'https://spellio-omega.vercel.app',
        codeUrl: 'https://github.com/hydratypelvl/Spellio',
        gradient: 'from-fuchsia-500/20 to-purple-500/20',
    },
    {
        title: 'DineQR',
        description: 'Smart QR Ordering System for restaurants. Enables contactless menu browsing and order placement through QR codes.',
        tags: ['Next.js', 'QR System', 'Food Tech'],
        liveUrl: null,
        codeUrl: 'https://github.com/hydratypelvl/DineQR',
        gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
        title: 'Checkmate',
        description: 'A simple and collaborative todo application built with Next.js. Create todo lists, track progress, and share with others.',
        tags: ['TypeScript', 'Next.js', 'Productivity'],
        liveUrl: null,
        codeUrl: 'https://github.com/hydratypelvl/Checkmate',
        gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
        title: 'r2todo',
        description: 'A clean and minimal todo application with task management, progress tracking, and a streamlined user experience.',
        tags: ['TypeScript', 'Next.js', 'Todo'],
        liveUrl: 'https://r2todo.vercel.app',
        codeUrl: 'https://github.com/hydratypelvl/r2todo',
        gradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
        title: 'Next.js Dashboard',
        description: 'An admin dashboard built with Next.js featuring data visualization, user management, and modern UI components.',
        tags: ['TypeScript', 'Next.js', 'Dashboard'],
        liveUrl: null,
        codeUrl: 'https://github.com/hydratypelvl/nextjs-dashboard',
        gradient: 'from-violet-500/20 to-purple-500/20',
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative w-full py-24">
            <div className="mx-auto max-w-6xl px-4">

                <div className="mb-12 text-center sm:text-left">
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        <span className="text-primary">Projects</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-gray-400">
                        A selection of projects I&apos;ve built to practice, learn, and solve real-world problems.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group relative overflow-hidden rounded-xl border border-cyan-400/10 bg-card transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
                        >
                            <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                <div className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-300">
                                    {project.title.slice(0, 2)}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                                    {project.description}
                                </p>

                                <ul className="mt-3 flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2 py-0.5 text-[10px] text-cyan-300"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-4 flex items-center gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                                        >
                                            <ExternalLink size={12} />
                                            Live
                                        </a>
                                    )}
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                                    >
                                        <Github size={12} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ProjectsSection
