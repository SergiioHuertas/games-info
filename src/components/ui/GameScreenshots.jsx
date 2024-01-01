import Image from "next/image";
import {usePathname} from "next/navigation";
import {config} from "@/config";

export default async function ({id}){

    const screenshotsData = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${config.common.apiKey}&page_size=100`)
    const {results: screenshots} = await screenshotsData.json()

    return (
        <>
            {screenshots?.length > 0 && (
                <>
                    <h3 className="text-xl font-semibold mt-4">Screenshots</h3>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        {screenshots.map((screenshot, index) => {
                                return (
                                    <Image
                                        key={`screenshot-${index}`}
                                        alt="Screenshot 1"
                                        className="w-full h-40 object-cover rounded-md"
                                        height="200"
                                        src={screenshot.image}
                                        style={{
                                            aspectRatio: "200/200",
                                            objectFit: "cover",
                                        }}
                                        width="200"
                                    />
                                )
                            }
                        )}
                    </div>
                </>
            )}
        </>
    )
}