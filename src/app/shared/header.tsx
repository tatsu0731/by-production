import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center mx-6 mt-6">
            <div className="text-2xl font-bold"><Link href="/">By-Production</Link></div>
            <ul className="flex gap-10">
                <li className="text-xl font-bold hover:opacity-50"><Link href="/">Top</Link></li>
                <li className="text-xl font-bold hover:opacity-50"><Link href="/infomation">Infomation</Link></li>
                <li className="text-xl font-bold hover:opacity-50"><Link href="/works">Works</Link></li>
            </ul>
        </header>
    )
}