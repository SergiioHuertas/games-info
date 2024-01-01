import Image from "next/image";
import {usePathname} from "next/navigation";
import {config} from "@/config";

export default async function GameAchievements({id}) {

    const achievementsData = await fetch(`https://api.rawg.io/api/games/${id}/achievements?key=${config.common.apiKey}&page_size=1000`)
    const {results: achievements} = await achievementsData.json()

    return (
        <>
            {achievements?.length > 0 && (
                <>
                    <h3 className="text-xl font-semibold mt-4">Achievements</h3>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        {achievements.map((achievement, index) => {
                                return (
                                    <div key={`achievement-${index}`} className={'border rounded-md items-center content-center justify-center align-middle flex flex-col p-2'}>
                                        <h1>
                                            {achievement.name}
                                        </h1>
                                        <Image
                                            alt={`Achievement ${achievement.name}`}
                                            className="object-cover rounded-2xl"
                                            src={achievement.image}
                                            height="100"
                                            width="100"
                                        />
                                        <p className={'items-center justify-center'}>
                                            {achievement.description}
                                        </p>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </>
            )}
        </>
    )
}