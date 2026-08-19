'use client';

import { useEffect, useState } from 'react';

const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'journey' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
];

export default function NavbarSection() {
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            const offset = 120;
            let current = '';

            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= offset) {
                    current = item.id;
                }
            }

            if (current) setActive(current);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <nav
                aria-label="Main navigation"
                className={`
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-300
                    ${scrolled
                        ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
                        : 'bg-transparent'
                    }
                `}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-center">
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`
                                        text-sm transition-colors duration-200
                                        ${active === item.id
                                            ? 'text-primary font-medium'
                                            : 'text-muted-foreground hover:text-foreground'
                                        }
                                    `}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setOpen(!open)}
                        className="fixed right-6 top-4 z-50 md:hidden text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setOpen(false)}
                                className={`
                                    text-lg tracking-wide transition-colors
                                    ${active === item.id
                                        ? 'text-primary font-medium'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }
                                `}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
