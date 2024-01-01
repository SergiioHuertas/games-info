import Link from "next/link";
import {ExternalLinkIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import parse from "html-react-parser";
import {config} from "@/config";

export default async function GameInfo({id}) {

    const fetchData = async () => {
        let result;
        try {
            const data = await fetch(`https://api.rawg.io/api/games/${id}?key=${config.common.apiKey}`);
            result = await data?.json?.();
        } catch (e) {
            console.log(e);
            result = null;
        }
        return result;
    }

    const {name, description, background_image, released, metacritic, rating, website} = await fetchData()

    return (
        <>
            <div className="flex gap-2">
                {name && (<h2 className="text-5xl font-semibold">{name}</h2>)}
                {website && (<Link href={website}><ExternalLinkIcon/></Link>)}
            </div>
            <div className="flex gap-2">
                {background_image && (<Image
                    alt="Game background"
                    className="rounded-md"
                    src={background_image}
                    width={400}
                    height={200}
                />)}
                <div>
                    <h3 className="text-xl font-semibold">Description</h3>
                    {description && parse(description)}
                </div>
            </div>
            <div className="grid-cols-2">
                <div className="gap-2">
                    {(rating || metacritic) &&
                        (<div>
                            <h3 className="text-xl font-semibold">Scores</h3>
                            {metacritic && (<p className="mt-2">Metacritic: {metacritic}/100</p>)}
                            {rating && (<p className="mt-2">Rating: {rating}/5</p>)}
                        </div>)
                    }
                    {released &&
                        (<div>
                            <h3 className="text-xl font-semibold mt-4">Release Date</h3>
                            <p className="mt-2">{released}</p>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}