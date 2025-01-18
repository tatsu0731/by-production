import Image from "next/image";
import Link from "next/link";

export default function InformationComponents() {
    return (
        <div className="flex flex-col gap-24 my-24">
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ Contact</h2>
                <p className="text-md">お仕事の依頼等は以下のメールアドレスへお願いいたします！</p>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">■ About MuNi</h2>
                <p>漫画を描きたいずっと。</p>
                <div>
                    <Link href={"https://x.com/blaston0130"}>
                        <Image src="logo/logo-x.svg" width={24} height={24} alt=""/>
                    </Link>
                </div>
            </section>
        </div>
    );
}
