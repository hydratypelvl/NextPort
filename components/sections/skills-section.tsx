import React from 'react'

const skillCategories = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Shadcn'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Laravel', 'Vue.js', 'REST APIs', 'GraphQL'],
    },
    {
        title: 'Databases',
        skills: ['PostgreSQL', 'Supabase', 'SQL'],
    },
    {
        title: 'Tools & Platforms',
        skills: ['Git', 'Docker', 'Linux', 'Figma', 'npm'],
    },
    {
        title: 'Other',
        skills: ['SSR / CSR', 'API Integration', 'XML', 'SEO'],
    },
]

const SkillsSection = () => {
    return (
        <section id="skills" className="relative w-full py-24">
            <div className="mx-auto max-w-5xl px-4">
                <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    <span className="text-primary">Skills</span> & Technologies
                </h2>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group rounded-xl border border-cyan-400/10 bg-card p-6 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)]"
                        >
                            <h3 className="text-lg font-semibold text-primary">
                                {category.title}
                            </h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_10px_rgba(0,246,255,0.2)]"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SkillsSection
