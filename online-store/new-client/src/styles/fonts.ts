import { Montserrat, Rubik, Syne, Unbounded } from 'next/font/google';

export const unbounded = Unbounded({ subsets: ["cyrillic", "latin"], weight: "300", display: "swap", variable: '--font-unbounded' });
export const montserrat = Montserrat({ subsets: ["cyrillic", "latin"], weight: "500", display: "swap", variable: '--font-mont' });
export const rubik = Rubik({ subsets: ["cyrillic", "latin"], display: "swap", variable: '--font-rubik' });
export const syne = Syne({ subsets: ["latin"], weight: "800", display: "swap", variable: '--font-syne' });