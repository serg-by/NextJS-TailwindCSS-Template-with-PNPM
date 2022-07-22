import Link from "next/link";
import { useRouter } from "next/router";


const headerClass={
    link: "text-gray-600 hover:text-cyan-300",
    linkActive: "text-cyan-300 hover:text-cyan-400",
    container:"flex-grow container mx-auto px-4 sm:px-6",
    box:" flex  items-baseline  space-x-1 py-2 sm:p-2 sm:space-x-6 md:space-x-10 md:p-2 ",
    box__link__p:"cursor-pointer text-gray-800 dark:text-gray-100 text-sm sm:text-md md:text-lg font-medium font-ibm px-2 py-1 opacity-80  rounded-lg hover:text-gray-50 hover:bg-gray-800/80 dark:hover:bg-gray-50/30 transition duration-300 ease-in",
  }

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header>
        <div className={headerClass.container}>
            <div
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 pb-14 px-4
            sm:px-6 md:px-8 ">
              <div>
                <Link href="/">
                  <a className="text-gray-200 hover:text-cyan-900 text-3xl">Template</a>
                </Link>
              </div>
              <nav className="text-gray-600 text-lg mt-4 sm:mt-0">
                <ul>
                  <li className="inline-flex">
                    <Link href="/">
                      <a
                        className={`${
                          pathname === "/"
                          ? headerClass.linkActive 
                          : headerClass.link
                        }`}>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="inline-flex ml-3">
                    <Link href="/blog">
                      <a
                        className={`${
                          pathname === "/blog"
                          ? headerClass.linkActive
                          : headerClass.link
                        }`}>
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li className="inline-flex ml-3">
                    <Link href="/code">
                      <a
                        className={`${
                          pathname === "/code"
                          ? headerClass.linkActive
                          : headerClass.link
                        }`}>
                        Snippets
                      </a>
                    </Link>
                  </li>
                  <li className="inline-flex ml-3">
                    <Link href="/about">
                      <a
                        className={`${
                          pathname === "/about"
                          ? headerClass.linkActive
                          : headerClass.link
                        }`}>
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="inline-flex ml-3">
                    <Link href="/videos">
                      <a
                        className={`${
                          pathname === "/videos"
                            ? headerClass.linkActive
                            : headerClass.link
                        }`}>
                        Videos
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
    </header>
  );
}