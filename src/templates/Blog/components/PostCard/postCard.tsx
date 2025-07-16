import Image from "next/image";
import Link from "next/link";

export const PostCard = () => {
  return (
    <Link
      href={`/blog/`}
      className="w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 
      overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-gray-300 text-body-xs">20/12/2024</span>
          </div>

          <Image
            src={`/assets/primeiro-post.png`}
            alt={``}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center"
          />
        </div>

        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3"></h2>

          <p className="text-gray-300 text-body-sm line-clamp-3"></p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-200 border-[1px]">
              <Image
                src={`/avatar1.svg`}
                alt={``}
                fill
                className="object-cover rounded-s-md"
              />
            </div>

            <span className="text-body-sm text-gray-300">Nome Autor</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
