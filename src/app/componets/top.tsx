import Image from "next/image";

export default function Top() {
    return (
        <div className="flex flex-col gap-24 my-24">
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ News</h2>
                <div className=" ml-24">
                    <p><span className="mr-2">2025.1.18</span>By-Production 設立<span className="ml-2 text-red-400 font-bold">New!</span></p>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Concept</h2>
                <p className="text-md font-bold">「創作、それ以上の価値を」</p>
                <p>付加価値を重んじ、寄り道を楽しむ。</p>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Member</h2>
                <div className="flex gap-4">
                    <div  className="rounded">
                        <Image src="/MuNi.JPG" width={160} height={160} alt=""/>
                    </div>
                    <div>
                        <p className="text-md font-bold">MuNi（むに）</p>
                        <p className=" leading-8">普段はSWE（ソフトウェアエンジニア）として働きつつ週末に絵を描いている。なんか立ち上げたくね？という軽いノリでサークルを立ち上げるも仲間が居らずぼっちで運営している。<br />比企谷八幡に憧れ色々あって著者と同じ大学学部（明治大学情報コミュニケーション学部）に入る。<br />趣味は漫画、アニメ、バスケ</p>
                    </div>
                </div>
                <div className="ml-2">
                    <h3 className="text-xl font-bold mt-10 mb-4">□ History</h3>
                    <div className="flex flex-col gap-2">
                        <p>2020.2.2 「自分を見つめ直して」高文連会長賞受賞</p>
                        <p>2022.4.01 漫画研究会入会</p>
                        <p>2022.10.16 プログラミングコミュニティPOSSE入会</p>
                        <p>2025.1.18 創作サークルBy-Production創設</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Pick Up Works</h2>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                        <Image src="/chiyoko.JPG" width={300} height={300} alt=""/>
                        <p className="font-bold">「千代子（アクタージュ）」</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image src="/yonagi.JPG" width={300} height={300} alt=""/>
                        <p className="font-bold">「夜凪景（アクタージュ）」</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image src="/manken.JPG" width={300} height={300} alt=""/>
                        <p className="font-bold">「君もどこかで見ているんだろうか」</p>
                    </div>
                </div>
            </section>
        </div>
    )
}