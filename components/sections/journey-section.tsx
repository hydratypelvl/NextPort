'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimelineChapter {
    id: string;
    title: string;
    subtitle: string;
    story: string[];
    tags: string[];
    visual: 'terminal' | 'circuit' | 'block' | 'data' | 'css' | 'browser' | 'code';
}

const chapters: TimelineChapter[] = [
    {
        id: 'first-program',
        title: 'The First Program',
        subtitle: 'How it all started',
        story: [
            'I wrote a game where the frames were literally drawn character by character, line by line — a simple car on a road, made out of ASCII art. And then I wrote it again. And again.',
            'Every version had a different obstacle, a different challenge. It never occurred to me that this was "programming." I was just making things.',
            'And then it hit me: I can make a computer do what I want.',
        ],
        tags: ['Curiosity', 'Games', 'First Steps'],
        visual: 'terminal',
    },
    {
        id: 'minecraft',
        title: 'Minecraft',
        subtitle: 'My first "real" programming language',
        story: [
            'Minecraft was where I learned to code — Lua was my gateway. I built computers inside the game, wrote scripts, automated things.',
            'I ran servers, figured out networking, performance tuning — all without realizing I was learning real engineering.',
            "I wasn't making games. I was learning how systems work.",
        ],
        tags: ['Lua', 'Servers', 'Automation'],
        visual: 'block',
    },
    {
        id: 'electronics',
        title: 'Electronics & Arduino',
        subtitle: 'Breaking things to learn how they work',
        story: [
            'I learned about resistors, voltage, microcontrollers — the stuff that makes electronics actually tick.',
            'I tore apart old gadgets, wired things up wrong, fried a few components. And every failure taught me something new.',
            'It wasn\'t about building something perfect. It was about the curiosity to ask "what happens if I do this?"',
        ],
        tags: ['Arduino', 'Hardware', 'Curiosity'],
        visual: 'circuit',
    },
    {
        id: 'cssbattle',
        title: 'CSSBattle',
        subtitle: 'Where I fell in love with the frontend',
        story: [
            'CSSBattle turned CSS into a puzzle. How few characters can I use? What\'s the most elegant way to draw this shape?',
            'It changed how I see code — not just as instructions, but as craft.',
            'I wasn\'t just writing CSS anymore. I was designing with it.',
        ],
        tags: ['CSS', 'Visual Design', 'Optimization'],
        visual: 'css',
    },
    {
        id: 'game-apis',
        title: 'Game APIs',
        subtitle: 'When curiosity met real data',
        story: [
            'I started pulling live data from the World of Warcraft API. Built tools that showed real-time character info, calculated routes, even made coordinate systems.',
            'That\'s when I realized: the web isn\'t just a place to read things. It\'s a platform.',
            'The APIs weren\'t magic. They were just another system I could learn to talk to.',
        ],
        tags: ['WoW API', 'Data', 'Visualization'],
        visual: 'data',
    },
    {
        id: 'building-for-people',
        title: 'Building for People',
        subtitle: 'From hobby to impact',
        story: [
            'People started asking me to build websites. Real websites, for real businesses, solving real problems.',
            'That shift — from building for myself to building for others — changed everything.',
            'Code stopped being a toy and became a tool.',
        ],
        tags: ['Freelance', 'Client Work', 'Impact'],
        visual: 'browser',
    },
    {
        id: 'professional',
        title: 'Professional Developer',
        subtitle: 'Where it all comes together',
        story: [
            'Laravel, Vue, REST APIs, databases, deployment pipelines — suddenly the things I\'d learned started fitting together into something bigger.',
            'I wasn\'t just experimenting anymore. I was shipping.',
            'Everything I\'d done — the electronics, the game mods, the CSS puzzles — it all fed into this.',
        ],
        tags: ['Laravel', 'Vue', 'Full-Stack'],
        visual: 'code',
    },
];

function TimelineVisual({ type }: { type: TimelineChapter['visual'] }) {
    switch (type) {
        case 'terminal':
            return (
                <div className="rounded-lg border border-cyan-400/10 bg-muted/50 p-3 font-mono text-xs leading-relaxed text-cyan-300/70">
                    <div className="mb-1 text-[10px] text-muted-foreground">{'// hello_world.lua'}</div>
                    <div><span className="text-accent">for</span> i=<span className="text-primary">1</span>,<span className="text-primary">10</span> <span className="text-accent">do</span></div>
                    <div className="pl-4">print(<span className="text-green-400">&quot;Car at frame &quot;</span>..i)</div>
                    <div><span className="text-accent">end</span></div>
                </div>
            );
        case 'circuit':
            return (
                <div className="flex items-center gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                'h-1.5 w-1.5 rounded-full',
                                i % 3 === 0 ? 'bg-primary shadow-[0_0_4px_rgba(0,246,255,0.5)]' : 'bg-muted-foreground/30'
                            )}
                        />
                    ))}
                    <div className="ml-2 h-px w-8 bg-primary/40" />
                    <div className="h-2 w-2 rounded-sm border border-primary/40" />
                </div>
            );
        case 'block':
            return (
                <div className="grid grid-cols-4 gap-1">
                    {['#4a7c59', '#6b8f71', '#8b4513', '#5c4033', '#87ceeb', '#4682b4', '#2e8b57', '#3cb371'].map(
                        (color, i) => (
                            <div
                                key={i}
                                className="h-4 w-4 rounded-sm border border-white/5"
                                style={{ backgroundColor: color + '80' }}
                            />
                        )
                    )}
                </div>
            );
        case 'data':
            return (
                <div className="space-y-1.5">
                    {['GET /api/character/123', 'GET /api/routes/coordinates', 'GET /api/items/stats'].map(
                        (line, i) => (
                            <div key={i} className="flex items-center gap-2 font-mono text-[15px]">
                                <span className="text-green-400">200</span>
                                <span className="text-muted-foreground">{line}</span>
                            </div>
                        )
                    )}
                </div>
            );
        case 'css':
            return (
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full border-2 border-primary/60" />
                    <div className="h-8 w-8 rotate-45 border-2 border-accent/60" />
                    <div className="flex flex-col gap-0.5">
                        <div className="h-1 w-10 rounded-full bg-primary/40" />
                        <div className="h-1 w-6 rounded-full bg-accent/40" />
                        <div className="h-1 w-8 rounded-full bg-primary/40" />
                    </div>
                </div>
            );
        case 'browser':
            return (
                <div className="rounded-lg border border-cyan-400/10 bg-muted/30">
                    <div className="flex items-center gap-1 border-b border-cyan-400/10 px-2 py-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
                        <div className="ml-2 h-1 flex-1 rounded-full bg-muted-foreground/10" />
                    </div>
                    <div className="space-y-1 p-2">
                        <div className="h-1 w-3/4 rounded-full bg-muted-foreground/10" />
                        <div className="h-1 w-1/2 rounded-full bg-muted-foreground/10" />
                        <div className="mt-2 h-4 w-full rounded bg-primary/10" />
                    </div>
                </div>
            );
        case 'code':
            return (
                <div className="rounded-lg border border-cyan-400/10 bg-muted/50 p-3 font-mono text-[10px] leading-relaxed text-cyan-300/70">
                    <div><span className="text-accent">export default</span> {'{'}</div>
                    <div className="pl-3">api: <span className="text-green-400">&#39;REST&#39;</span>,</div>
                    <div className="pl-3">stack: [<span className="text-green-400">&#39;Laravel&#39;</span>, <span className="text-green-400">&#39;Vue&#39;</span>],</div>
                    <div>{'}'}</div>
                </div>
            );
    }
}

export default function JourneySection() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = itemRefs.current.indexOf(entry.target as HTMLElement);
                        if (idx !== -1) {
                            setActiveIndex((prev) => Math.max(prev, idx));
                        }
                    }
                });
            },
            { rootMargin: '-35% 0px -35% 0px' }
        );

        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        itemRefs.current.forEach((el, i) => {
            if (!el) return;
            if (i <= activeIndex) {
                el.classList.add('visible');
            }
        });
    }, [activeIndex]);

    const progressPercent = activeIndex >= 0
        ? Math.min(100, ((activeIndex + 1) / chapters.length) * 100)
        : 0;

    return (
        <section id="journey" ref={sectionRef} className="relative w-full py-24">
            <div className="mx-auto max-w-4xl px-4">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    My <span className="text-primary">Journey</span>
                </h2>
                <p className="mt-3 text-gray-400">
                    It started with curiosity.

                    I experimented with Flash animations, Minecraft modpacks, Lua scripts, automation bots, and even hosted my own Minecraft servers. I wasn't trying to become a programmer — I just wanted to understand how things worked and see what I could build.

                    Eventually, that curiosity turned into programming.
                </p>

                <div className="relative mt-16">
                    {/* Vertical line background */}
                    <div
                        className="absolute left-[15px] top-0 bottom-0 w-px bg-cyan-400/10 sm:left-1/2 sm:-translate-x-px"
                    />
                    {/* Progress fill */}
                    <div
                        className="absolute left-[15px] top-0 w-px bg-primary transition-all duration-500 ease-out sm:left-1/2 sm:-translate-x-px"
                        style={{ height: `${progressPercent}%` }}
                    />

                    {chapters.map((chapter, i) => {
                        const isActive = i <= activeIndex;
                        const isCurrent = i === activeIndex;
                        const fromLeft = i % 2 === 0;

                        return (
                            <article
                                key={chapter.id}
                                ref={(el) => { itemRefs.current[i] = el; }}
                                className={cn(
                                    'journey-fade-in relative mb-16 last:mb-0',
                                    fromLeft ? 'from-left' : 'from-right'
                                )}
                            >
                                {/* Dot */}
                                <span
                                    className={cn(
                                        'absolute left-[11px] top-1 z-10 h-[10px] w-[10px] rounded-full transition-all duration-500 sm:left-1/2 sm:-translate-x-1/2',
                                        isActive
                                            ? 'bg-primary shadow-[0_0_12px_rgba(0,246,255,0.6)]'
                                            : 'bg-border'
                                    )}
                                />

                                <div className="grid items-start gap-6 pl-10 sm:grid-cols-2 sm:gap-8 sm:pl-0">
                                    {/* Visual side */}
                                    <div
                                        className={cn(
                                            'flex items-center gap-3',
                                            fromLeft ? 'sm:order-1 sm:justify-end' : 'sm:order-2 sm:justify-start'
                                        )}
                                    >
                                        <div className={cn(
                                            'transition-opacity duration-500',
                                            isActive ? 'opacity-100' : 'opacity-30'
                                        )}>
                                            <TimelineVisual type={chapter.visual} />
                                        </div>
                                    </div>

                                    {/* Text side */}
                                    <div
                                        className={cn(
                                            fromLeft ? 'sm:order-2 sm:pl-8' : 'sm:order-1 sm:pr-8 sm:text-right'
                                        )}
                                    >
                                        <div className="mb-1 text-xs uppercase tracking-[0.15em] text-primary/60">
                                            {chapter.subtitle}
                                        </div>
                                        <h3 className={cn(
                                            'text-lg font-semibold transition-colors duration-300 sm:text-xl',
                                            isCurrent ? 'text-white' : 'text-white/70'
                                        )}>
                                            {chapter.title}
                                        </h3>

                                        <div className="mt-3 space-y-2">
                                            {chapter.story.map((paragraph, j) => (
                                                <p
                                                    key={j}
                                                    className={cn(
                                                        'text-sm leading-relaxed transition-colors duration-300',
                                                        isActive ? 'text-gray-400' : 'text-gray-400/40'
                                                    )}
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        <div className={cn(
                                            'mt-4 flex flex-wrap gap-2',
                                            !fromLeft && 'sm:justify-end'
                                        )}>
                                            {chapter.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}

                    {/* TODAY card */}
                    <article
                        ref={(el) => { itemRefs.current[chapters.length] = el; }}
                        className="journey-fade-in from-left relative"
                    >
                        <span className="absolute left-[11px] top-1 z-10 h-[10px] w-[10px] rounded-full border-2 border-accent bg-background shadow-[0_0_12px_rgba(255,0,255,0.5)] sm:left-1/2 sm:-translate-x-1/2" />

                        <div className="grid items-start gap-6 pl-10 sm:grid-cols-2 sm:gap-8 sm:pl-0">
                            <div className="flex items-center gap-3 sm:order-1 sm:justify-end">
                                <div className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold tracking-wider text-accent">
                                    NOW
                                </div>
                            </div>

                            <div className="sm:order-2 sm:pl-8">
                                <div className="mb-1 text-xs uppercase tracking-[0.15em] text-accent/60">
                                    Where I am today
                                </div>
                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                    Still Curious. Still Building.
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                    React, Next.js, TypeScript, Laravel, Vue &mdash; the stack keeps growing.
                                    But the mindset hasn&apos;t changed: figure out what I want to build,
                                    then learn whatever I need to build it.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'Laravel', 'Vue'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
