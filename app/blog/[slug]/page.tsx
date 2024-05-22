import Image from "next/image";
import fetchBlogs from "@/app/utils/fetch-blogs";
import config from "../../config";
import RichTextRenderer from "@/app/components/RichTextRender";

export default async function BlogArticle(props: any) {
  const blogs = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`);
  const blog = blogs.data[0];

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Answering Legal - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {blog.attributes.title}
        </span>
      </h1>
      <Image
        src={`${config.api}${blog.attributes.image.data.attributes.url}`}
        width={800}
        height={500}
        alt="Title image"
        priority
        className="rounded-lg mt-8 border"
      ></Image>
      <div className="mt-16">
        <RichTextRenderer
          content={blog.attributes.contentBlock}
        ></RichTextRenderer>
      </div>
    </div>
  );
}
