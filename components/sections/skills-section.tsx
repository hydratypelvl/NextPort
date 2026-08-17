'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Skill {
    name: string
    primary?: boolean
    projects?: string[]
}

interface SkillCategory {
    title: string
    description: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        description: 'User interfaces and client-side logic',
        skills: [
            { name: 'React', primary: true, projects: ['Spellio', 'TurboCore', 'Checkmate', 'Dashboard'] },
            { name: 'Next.js', primary: true, projects: ['Spellio', 'TurboCore', 'R1 Microservice', 'Checkmate', 'Dashboard'] },
            { name: 'TypeScript', primary: true, projects: ['Spellio', 'TurboCore', 'R1 Microservice', 'Checkmate'] },
            { name: 'JavaScript', primary: true, projects: ['R1 Tyres', 'All projects'] },
            { name: 'Vue.js', projects: ['Professional work'] },
            { name: 'Angular', projects: ['Bidstack'] },
            { name: 'HTML5', projects: ['All projects'] },
            { name: 'CSS3', projects: ['All projects'] },
            { name: 'Tailwind CSS', projects: ['Spellio', 'TurboCore', 'Portfolio'] },
            { name: 'Sass', projects: ['Bidstack'] },
            { name: 'Shadcn', projects: ['Portfolio'] },
        ],
    },
    {
        title: 'Backend',
        description: 'Server-side logic and APIs',
        skills: [
            { name: 'Node.js', primary: true, projects: ['Spellio', 'TurboCore'] },
            { name: 'Laravel', primary: true, projects: ['R1 Tyres', 'Professional work'] },
            { name: 'PHP', projects: ['R1 Tyres'] },
            { name: 'REST APIs', projects: ['Spellio', 'R1 Tyres', 'Professional work'] },
            { name: 'GraphQL', projects: ['Professional work'] },
        ],
    },
    {
        title: 'Data',
        description: 'Databases and data management',
        skills: [
            { name: 'PostgreSQL', primary: true, projects: ['Spellio'] },
            { name: 'MySQL', projects: ['R1 Tyres'] },
            { name: 'Supabase', projects: ['TurboCore'] },
            { name: 'SQL', projects: ['All projects'] },
            { name: 'Prisma', primary: true, projects: ['Spellio'] },
        ],
    },
    {
        title: 'Tools & Infrastructure',
        description: 'Development tools and deployment',
        skills: [
            { name: 'Git', primary: true, projects: ['All projects'] },
            { name: 'Docker', projects: ['Professional work'] },
            { name: 'Linux', projects: ['Server management'] },
            { name: 'Vercel', projects: ['Spellio', 'TurboCore', 'Portfolio'] },
            { name: 'npm', projects: ['All projects'] },
            { name: 'Figma', projects: ['UI/UX design'] },
        ],
    },
    {
        title: 'Concepts',
        description: 'Patterns and methodologies',
        skills: [
            { name: 'SSR / CSR', projects: ['Spellio', 'TurboCore'] },
            { name: 'API Integration', projects: ['R1 Tyres', 'Spellio'] },
            { name: 'Web Scraping', projects: ['Personal experiments'] },
            { name: 'XML', projects: ['R1 Tyres', 'Professional work'] },
            { name: 'SEO', projects: ['Client websites'] },
            { name: 'Testing', projects: ['Professional work'] },
        ],
    },
]

function SkillPill({ skill, onHover, isHighlighted }: {
    skill: Skill
    onHover: (skill: Skill | null) => void
    isHighlighted: boolean
}) {
    return (
        <div
            className="relative"
            onMouseEnter={() => onHover(skill)}
            onMouseLeave={() => onHover(null)}
        >
            <span
                className={cn(
                    'inline-flex items-center rounded-full border px-3 py-1 text-xs transition-all duration-200',
                    skill.primary
                        ? 'border-primary/30 bg-primary/10 text-primary font-medium'
                        : 'border-cyan-400/15 bg-cyan-400/5 text-cyan-300',
                    isHighlighted && 'border-primary/50 bg-primary/15 shadow-[0_0_12px_rgba(0,246,255,0.2)]'
                )}
            >
                {skill.name}
            </span>

            {isHighlighted && skill.projects && skill.projects.length > 0 && (
                <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-lg border border-cyan-400/10 bg-card p-3 shadow-xl">
                    <span className="text-[10px] uppercase tracking-widest text-primary/60">Used in</span>
                    <ul className="mt-1.5 space-y-0.5">
                        {skill.projects.map((project) => (
                            <li key={project} className="text-xs text-gray-400">
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
    const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
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
            { rootMargin: '-15% 0px -15% 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const primarySkills = category.skills.filter((s) => s.primary)
    const secondarySkills = category.skills.filter((s) => !s.primary)

    return (
        <article
            ref={ref}
            className={cn(
                'journey-fade-in rounded-xl border border-cyan-400/10 bg-card p-6 transition-all duration-300 hover:border-cyan-400/20',
                index % 2 === 0 ? 'from-left' : 'from-right'
            )}
        >
            <div className="mb-1 text-xs uppercase tracking-[0.15em] text-primary/60">
                {category.description}
            </div>
            <h3 className="text-lg font-semibold text-white">
                {category.title}
            </h3>

            <div className="mt-4 space-y-3">
                {primarySkills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {primarySkills.map((skill) => (
                            <SkillPill
                                key={skill.name}
                                skill={skill}
                                onHover={setHoveredSkill}
                                isHighlighted={hoveredSkill?.name === skill.name}
                            />
                        ))}
                    </div>
                )}

                {secondarySkills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {secondarySkills.map((skill) => (
                            <SkillPill
                                key={skill.name}
                                skill={skill}
                                onHover={setHoveredSkill}
                                isHighlighted={hoveredSkill?.name === skill.name}
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}

export default function SkillsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.disconnect()
                }
            },
            { rootMargin: '-10% 0px -10% 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="relative w-full py-24">
            <div className="mx-auto max-w-5xl px-4">
                <div ref={sectionRef} className="journey-fade-in">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary/60">
                        Tools & Technologies
                    </span>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        The tools I reach for when I build things.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {skillCategories.map((category, i) => (
                        <SkillCategoryCard key={category.title} category={category} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
