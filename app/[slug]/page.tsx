import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { getArticleData } from "@/lib/article"

const Article = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    const articleData = await getArticleData(slug)

    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link href={"/"} className="flex flex-row gap-1 place-items-center">
                    <ArrowLeftIcon width={20} />
                    <p>back to home</p>
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <div className="mx-auto text-3xl pt-2">{articleData.title.toString()}</div>
            <div className="-mt-2 border-b border-neutral-400 bottom-border-shadow" />
            <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </section>
    )
}


export default Article;