import Image from "next/image";

export default function InformationComponents() {
    return (
        <div className="flex flex-col max-w-5xl gap-24 my-24">
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Contact</h2>
                <p className="text-md">連絡は各種SNSからお願いいたします！</p>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Member</h2>
                <div className="flex gap-4">
                    <div className="rounded">
                        <Image src="/MuNi.JPG" width={160} height={160} alt=""/>
                    </div>
                    <div>
                        <p className="text-md font-bold">MuNi（むに）</p>
                        <p className="leading-8">普段はソフトウェアエンジニアとして働きつつ週末に絵を描いている。なんか立ち上げたくね？という軽いノリでサークルを立ち上げるも仲間が居らずぼっちで運営している。<br />比企谷八幡に憧れ色々あって著者と同じ大学学部に入る。まだギリ学生。<br />趣味は漫画、アニメ、バスケ<br />良く書く言語はNext.js, Laravel ( PHP )</p>
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
        </div>
    );
}
