import Link from "next/link"
import Search from "@/components/ui/Search";
import Filters from "@/components/ui/Filters";
import Order from "@/components/ui/Order";
import {Suspense} from "react";
import GamesContainer from "@/components/ui/GamesContainer";
import GamesContainerSkeleton from "@/components/ui/skeletons/GamesContainerSkeleton";

export default async function Landing({searchParams}) {
  return (<>
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">Games info</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:underline" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="p-6">
      <section className="space-y-8">
        <Search placeholder="Search game..." />
        <Filters />
        <Order />
        <Suspense fallback={<GamesContainerSkeleton />}>
          <GamesContainer searchParams={searchParams}/>
        </Suspense>
      </section>
    </main>
    <footer className="p-6 bg-gray-800 text-center text-white mt-12">© 2023 Game News. All rights reserved.</footer>
  </>);
}


