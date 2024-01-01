import GameInfoSkeleton from "@/components/ui/skeletons/GameInfoSkeleton";
import {Suspense} from "react";
import GameInfo from "@/components/ui/GameInfo";
import GameScreenshots from "@/components/ui/GameScreenshots";
import GameScreenshotsSkeleton from "@/components/ui/skeletons/GameScreenshotsSkeleton";
import GameAchievements from "@/components/ui/GameAchievements";
import GameDLCs from "@/components/ui/GameDLCs";
import GameAchievementsSkeleton from "@/components/ui/skeletons/GameAchievementsSkeleton";
import GameDLCsSkeleton from "@/components/ui/skeletons/GameDLCsSkeleton";

export default function Page({searchParams}) {
    const {id} = searchParams;
    return (
        <>
            <main className="p-6 bg-gray-700 text-gray-300">
                <section className="space-y-8">
                    <Suspense fallback={<GameInfoSkeleton />}>
                        <GameInfo id={id}/>
                    </Suspense>
                    <Suspense fallback={<GameScreenshotsSkeleton />}>
                        <GameScreenshots id={id}/>
                    </Suspense>
                    <Suspense fallback={<GameAchievementsSkeleton />}>
                        <GameAchievements id={id}/>
                    </Suspense>
                    <Suspense fallback={<GameDLCsSkeleton />}>
                        <GameDLCs id={id}/>
                    </Suspense>
                </section>
            </main>
        </>
    )
}