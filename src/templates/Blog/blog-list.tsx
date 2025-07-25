import { Search } from "@/components/Search";
import { useRouter } from "next/router";
import { PostCard } from "./components/PostCard";

export const BlogList = () => {
  const router = useRouter();
  const query = router.query.q as string;

  const pageTitle = query
    ? `Resultados de busca para '${query}'`
    : "Dicas e estratégias para impulsionar seu negócio";

  return (
    <div className="flex flex-col py-6 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span
              className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left
           py-2 px-4 bg-cyan-300"
            >
              BLOG
            </span>

            <h1
              className="text-balance text-start md:text-left text-heading-lg
            md:text-heading-xl max-w-2xl text-gray-100"
            >
              {pageTitle}
            </h1>
          </div>
        </div>

        <Search />
      </header>

      <PostCard />
    </div>
  );
};
