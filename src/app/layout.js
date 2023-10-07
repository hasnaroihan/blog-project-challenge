import './globals.css';
import Navigation from './navigation/navigation';
import { Merriweather } from 'next/font/google';
import { Gabarito } from 'next/font/google';

export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300'],
    variable: '--font-merriweather',
});

export const gabarito = Gabarito({
    subsets: ['latin'],
    variable: '--font-gabarito',
});

export const metadata = {
    title: 'Blog Project Challenge',
    description: 'Simple blog project with Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${merriweather.variable} font-serif ${gabarito.variable} overscroll-none`}
            >
                <Navigation />
                {children}
                <a
                    className="absolute right-2 font-sans text-xs text-slate-500"
                    href="https://www.flaticon.com/free-icons/cake"
                    title="cake icons"
                >
                    Cake icons created by Freepik - Flaticon
                </a>
            </body>
        </html>
    );
}
