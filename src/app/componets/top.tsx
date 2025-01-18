import Image from "next/image";

export default function Top() {
    return (
        <div className="flex flex-col max-w-5xl gap-24 my-24">
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ News</h2>
                <div className="ml-6">
                    <p><span className="mr-2">2025.1.18</span>By-Production 設立<span className="ml-2 text-red-400 font-bold">New!</span></p>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Concept</h2>
                <p className="text-xl font-bold">「 By-Product + Production 」</p>
                <p className="leading-8">様々なバックグラウンドを持つものが交わることで生まれる偶然性に期待をしています。<br />目先のものだけに捉われず、遠回りも楽しみながら活動していきます。</p>
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