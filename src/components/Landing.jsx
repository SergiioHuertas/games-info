import Search from "@/components/ui/Search";
import Filters from "@/components/ui/Filters";
import Order from "@/components/ui/Order";
import {Suspense} from "react";
import GamesContainer from "@/components/ui/GamesContainer";
import GamesContainerSkeleton from "@/components/ui/skeletons/GamesContainerSkeleton";

export default async function Landing({searchParams}) {
  return (<>
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
  </>);
}


