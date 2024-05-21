import Image from "next/image";
import fetchBlogs from "@/app/utils/fetch-blogs";
import config from "../../config";
import { mdToHTML } from "../../snarkdown";
export default async function BlogArticle(props: any) {
  console.log("slug:");
  console.log(props.params.slug);
  const blogs = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`);

  const blog = blogs.data[0];
  console.log(blogs.data);
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
        <p
          dangerouslySetInnerHTML={{
            __html: mdToHTML(blog.attributes.content),
          }}
        ></p>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const blogs = await fetchBlogs("");

//   return blogs.data((blog: any) => ({
//     slug: blog.attributes.slug,
//   }));
// }
