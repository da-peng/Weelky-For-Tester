import MDXComponents from "@/components/mdx/MDXComponents";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `赞助 | ${siteConfig.name}`,
  };
}

export default async function Page() {
  return (
    <div className="flex flex-row w-full pt-12">
      <aside className="hidden md:block md:w-1/5 pl-6 max-h-[90vh] h-full overflow-auto sticky top-6 left-0"></aside>
      <div className="w-full md:w-3/5 px-2 md:px-12">
        <article id={`article`}>
          <h1>Thanks!⛵️</h1>
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={options}
          />
        </article>
        <Separator className="my-12 bg-gray-600" />
      </div>
      <div className="hidden md:flex flex-col justify-start lg:w-1/5 pr-6"></div>
    </div>
  );
}

const content = `
感谢所有帮助过我和赞助过我的朋友！
`;
