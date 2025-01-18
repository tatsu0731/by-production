"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    const isTop = pathname == "/";
    const isInfo = pathname == "/infomation";
    const isWorks = pathname == "/works";
    return (
        <header className="flex justify-between items-center mx-6 mt-6">
            <div className="text-2xl font-bold"><Link href="/">By-Production</Link></div>
            <ul className="flex gap-10">
                <li className={`text-xl font-bold hover:opacity-50 ${isTop ? "text-red-400" : ""  }`}><Link href="/">Top</Link></li>
                <li className={`text-xl font-bold hover:opacity-50 ${isInfo ? "text-red-400" : ""  }`}><Link href="/infomation">Infomation</Link></li>
                <li className={`text-xl font-bold hover:opacity-50 ${isWorks ? "text-red-400" : "" }`}><Link href="/works">Works</Link></li>
            </ul>
        </header>
    )
}