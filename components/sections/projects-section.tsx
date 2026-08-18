'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FeaturedProject {
    id: string
    number: string
    title: string
    motivation: string
    highlights: string[]
    tags: string[]
    image: string
    liveUrl?: string
    codeUrl?: string
}

interface CompactProject {
    title: string
    description: string
    tags: string[]
    image: string
    liveUrl?: string
    codeUrl?: string
}

const featuredProjects: FeaturedProject[] = [
    {
        id: 'spellio',
        number: '01',
        title: 'Spellio',
        motivation: 'I wanted to explore how far I could take a small game concept while designing the architecture and experience myself. From word selection to win states, every piece was a problem to figure out.',
        highlights: ['Game Logic', 'Achievements', 'Persistence', 'API', 'Database'],
        tags: ['Next.js', 'TypeScript', 'Prisma'],
        image: '/spellio.png',
        liveUrl: 'https://spellio-omega.vercel.app',
        codeUrl: 'https://github.com/hydratypelvl/Spellio',
    },
    {
        id: 'turbocore',
        number: '02',
        title: 'TurboCore',
        motivation: 'I wanted to understand the full e-commerce pipeline \u2014 product data, cart state, search, checkout flow. Building it for PC components made it feel like a real problem worth solving.',
        highlights: ['Product Catalog', 'Cart System', 'Search & Filter', 'Responsive UI'],
        tags: ['Next.js', 'TypeScript', 'E-Commerce'],
        image: '/turbocore.png',
        codeUrl: 'https://github.com/hydratypelvl/TurboCore',
    },
]

const compactProjects: CompactProject[] = [
    {
        title: 'R1 Tyres',
        description: 'Car and motorcycle web store with appointment system for tyre change, AC service, and more.',
        tags: ['Laravel', 'jQuery', 'Car Industry'],
        image: '/project_one.PNG',
        liveUrl: 'https://r1riepas.lv/pieraksts',
    },
    {
        title: 'R1 Microservice',
        description: 'A minimal dashboard for client tracking and streamlined service management.',
        tags: ['TypeScript', 'Next.js', 'Dashboard'],
        image: '/project_two.png',
        liveUrl: 'https://r2todo.vercel.app/riepas',
        codeUrl: 'https://github.com/hydratypelvl/r2todo',
    },
    {
        title: 'Checkmate',
        description: 'A collaborative todo application \u2014 create lists, track progress, share with others.',
        tags: ['TypeScript', 'Next.js', 'Productivity'],
        image: '/spellio.png',
        codeUrl: 'https://github.com/hydratypelvl/Checkmate',
    },
    {
        title: 'Next.js Dashboard',
        description: 'An admin dashboard with data visualization, user management, and modern UI components.',
        tags: ['TypeScript', 'Next.js', 'Dashboard'],
        image: '/window.svg',
        codeUrl: 'https://github.com/hydratypelvl/nextjs-dashboard',
    },
]

function BrowserMockup({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="overflow-hidden rounded-xl border border-cyan-400/10 bg-card">
            <div className="flex items-center gap-1.5 border-b border-cyan-400/10 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
            </div>
        </div>
    )
}

function FeaturedProject({
    project,
    index,
}: {
    project: FeaturedProject
    index: number
}) {
    const isReversed = index % 2 !== 0
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.classList.add('visible')
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.disconnect()
                }
            },
            { rootMargin: '-20% 0px -20% 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <article
            ref={ref}
            className={cn(
                'journey-fade-in mb-20 last:mb-0',
                isReversed ? 'from-right' : 'from-left'
            )}
        >
            <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
                <div className={cn(isReversed && 'md:order-2')}>
                    <BrowserMockup
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                    />
                </div>

                <div className={cn('flex flex-col justify-center', isReversed && 'md:order-1')}>
                    <span className="font-mono text-xs text-primary/40">{project.number}</span>
                    <h3 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                        {project.motivation}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {project.highlights.map((h, i) => (
                            <span key={h} className="flex items-center gap-3">
                                {i > 0 && <span className="text-primary/30">&middot;</span>}
                                {h}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,246,255,0.3)] hover:shadow-[0_0_25px_rgba(0,246,255,0.5)] transition-all duration-300">
                                    <ExternalLink size={14} />
                                    Explore
                                </Button>
                            </a>
                        )}
                        {project.codeUrl && (
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="outline" className="border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300">
                                    <Github size={14} />
                                    GitHub
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

function CompactCard({ project }: { project: CompactProject }) {
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.classList.add('visible')
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.disconnect()
                }
            },
            { rootMargin: '-20% 0px -20% 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <article
            ref={ref}
            className="journey-fade-in from-up group overflow-hidden rounded-xl border border-cyan-400/10 bg-card transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
        >
            <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="mt-1.5 text-sm text-gray-400 line-clamp-2">
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
                    {project.codeUrl && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                        >
                            <Github size={12} />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative w-full py-24">
            <div className="mx-auto max-w-6xl px-4">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary/60">
                        Projects
                    </span>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Things I built because I wanted<br className="hidden sm:block" /> to figure something out.
                    </h2>
                </div>

                {/* Featured Projects */}
                <div className="mb-20">
                    {featuredProjects.map((project, i) => (
                        <FeaturedProject key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* Divider */}
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-cyan-400/10" />
                    <div className="h-1 w-1 rounded-full bg-primary/30" />
                    <div className="h-px flex-1 bg-cyan-400/10" />
                </div>

                {/* Compact Grid */}
                <div className="mb-20 grid gap-6 sm:grid-cols-2">
                    {compactProjects.map((project) => (
                        <CompactCard key={project.title} project={project} />
                    ))}
                </div>

                {/* Lab Section */}
                <div className="rounded-xl border border-cyan-400/10 bg-card/50 p-8">
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">&#129514;</span>
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Lab
                            </h3>
                            <p className="mt-1 text-sm text-gray-400">
                                Small experiments, weird ideas, and things I built just to see if I could.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                            { label: 'Experiment 001', title: 'Frame Animations', desc: 'ASCII art games drawn character by character' },
                            { label: 'Experiment 002', title: 'WoW API Explorer', desc: 'Game data visualization and route calculation' },
                            { label: 'Experiment 003', title: 'Arduino Projects', desc: 'Hardware experiments with microcontrollers' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="group rounded-lg border border-cyan-400/10 bg-card p-4 transition-all duration-300 hover:border-cyan-400/20"
                            >
                                <span className="text-[10px] uppercase tracking-widest text-primary/40">
                                    {item.label}
                                </span>
                                <h4 className="mt-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                    {item.title}
                                </h4>
                                <p className="mt-1 text-xs text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
