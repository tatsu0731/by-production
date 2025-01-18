import Image from "next/image";

export default function WorksComponents() {
    return (
        <div className="flex flex-col gap-24 my-24">
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Works</h2>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
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
                    <div className="flex flex-col gap-2">
                        <Image src="/zibun.jpg" width={300} height={300} alt=""/>
                        <p className="font-bold">「自分を見つめ直して」</p>
                        <p className="text-sm text-red-400 font-bold">2020年 高文連会長賞受賞作品</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image src="/yonagi2.JPG" width={300} height={300} alt=""/>
                        <p className="font-bold">「画面の向こうの君」</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image src="/daikoku.JPG" width={300} height={300} alt=""/>
                        <p className="font-bold">「大黒」</p>
                    </div>
                </div>
            </section>
        </div>
    )
}