import Image from "next/image";
import {config} from "@/config";

export default async function GameDLCs({id}) {

    const dlcData = await fetch(`https://api.rawg.io/api/games/${id}/additions?key=${config.common.apiKey}&page_size=100`)
    const {results: dlc} = await dlcData.json()

    return (
        <>
            {dlc?.length > 0 && (
                <>
                    <h3 className="text-xl font-semibold mt-4">DLCs</h3>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        {dlc.map((dlc, index) => {
                                return (
                                    <div key={`achievement-${index}`} className={'border rounded-md items-center content-center justify-center align-middle flex flex-col p-2'}>
                                        <h1>
                                            {dlc.name}
                                        </h1>
                                        <Image
                                            alt={`Achievement ${dlc.name}`}
                                            className="object-cover rounded-2xl"
                                            src={dlc.background_image}
                                            height="200"
                                            width="200"
                                        />
                                        <section>
                                            <p className={'items-center justify-center'}>
                                                Released: {dlc.released}
                                            </p>
                                        </section>
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