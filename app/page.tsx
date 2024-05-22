import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import config from "./config";
import fetchBlogs from "./utils/fetch-blogs";

export default async function Home() {
  const blogs = await fetchBlogs("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {blogs.data.map((post: any) => (
        <Card key={post.id}>
          <Image
            src={`${config.api}${post.attributes.image.data.attributes.url}`}
            alt="image"
            width={500}
            height={500}
            priority
            className="rounded-t-lg h-[200px] object-cover"
          ></Image>
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">
              {post.attributes.title}
            </h3>
            <p className="text-sm line-clamp-3 text-gray-600">
              {post.attributes.description}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.attributes.slug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
