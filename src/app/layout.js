import './globals.css';
import { Merriweather } from 'next/font/google';
import { Gabarito } from 'next/font/google';
import Navigation from './navigation/navigation';

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
            <body className={`${merriweather.variable} font-serif`}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
