import React from 'react'

const experiences = [
    {
        role: 'Full-Stack Web Developer',
        company: 'SIA "R1"',
        period: 'Apr 2022 — May 2023',
        tasks: [
            'Developed and modernized the company website using Laravel and jQuery, improving usability and performance.',
            'Designed UI/UX prototypes in Figma and translated designs into responsive web interfaces.',
            'Planned, designed, developed and integrated web application functionality.',
            'Built and customized reusable website components with a focus on responsive and user-friendly interfaces.',
            'Integrated REST APIs, XML and Google Maps to extend website functionality.',
        ],
    },
    {
        role: 'Front-End Web Developer',
        company: 'SIA "Bidstack"',
        period: 'Sep 2020 — Dec 2021',
        tasks: [
            'Developed frontend functionality using TypeScript, Angular, Storybook and Sass.',
            'Implemented efficient API requests for retrieving application data.',
            'Built user interfaces for displaying and working with real-time data.',
            'Used Git for version control and tracking application changes.',
            'Developed responsive web interfaces for multiple platforms with a focus on user experience.',
            'Integrated REST APIs, XML and Google Maps into web applications.',
        ],
    },
    {
        role: 'Back-End Web Developer',
        company: 'SIA "Apply"',
        period: 'Jul 2019 — Jun 2020',
        tasks: [
            'Developed backend functionality using Laravel and Vue.js while expanding practical software-development skills.',
            'Worked as part of a development team to implement features, fix bugs and improve existing applications.',
            'Integrated external services and functionality through APIs.',
            'Developed internal tools for data entry and aggregation based on client requirements.',
            'Processed and prepared data for machine-learning algorithms.',
        ],
    },
]

const education = [
    {
        degree: 'Professional Secondary Education — Programmer',
        school: 'Rīgas Tehniskā Koledža',
        period: '2016 — 2020',
    },
    {
        degree: 'Secondary Education',
        school: 'Rīgas 64.vidusskola',
        period: '2007 — 2016',
    },
]

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative w-full py-24">
            <div className="mx-auto max-w-4xl px-4">

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        <span className="text-primary">Experience</span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Where I&apos;ve worked, what I&apos;ve built, and what I&apos;ve learned along the way.
                    </p>
                </div>

                <div className="space-y-10">
                    {experiences.map((exp) => (
                        <article key={exp.role + exp.company} className="relative border-l border-cyan-400/20 pl-6">
                            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,246,255,0.6)]" />

                            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                    {exp.role}
                                </h3>
                                <span className="text-sm text-cyan-300/70">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="mt-1 text-sm text-primary/80">
                                {exp.company}
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-4 text-gray-400">
                                {exp.tasks.map((task) => (
                                    <li key={task}>{task}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div id="contact" className="mt-16">
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        <span className="text-primary">Education</span>
                    </h3>

                    <div className="mt-6 space-y-6">
                        {education.map((edu) => (
                            <article key={edu.degree} className="relative border-l border-cyan-400/20 pl-6">
                                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_rgba(255,0,255,0.6)]" />

                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="text-base font-semibold text-white">
                                        {edu.degree}
                                    </h4>
                                    <span className="text-sm text-cyan-300/70">
                                        {edu.period}
                                    </span>
                                </div>

                                <p className="mt-1 text-sm text-gray-400">
                                    {edu.school}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ExperienceSection
