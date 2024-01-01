import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card";
import {Badge} from "@/components/ui/Badge";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import {config} from "@/config";

export default async function GamesContainer({searchParams}) {
    const currentPage = Number(searchParams?.page) || 1;
    const search = searchParams?.search?.toString() || '';
    const metacritic = searchParams?.metacritic?.toString() || '';
    const ordering = searchParams?.ordering?.toString() || '';
    const itemsPerPage = config.common.itemsPerPage;
    const apiKey = config.common.apiKey;

    const fetchData = async () => {
        let result;
        try {
            const data = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=${itemsPerPage}&page=${currentPage.toString()}&search=${search}&metacritic=${metacritic}&ordering=${ordering}`);
            result = await data?.json?.();
        } catch (e) {
            console.log(e);
            result = null;
        }
        return result;
    };

    let result = await fetchData();
    const totalPages = Math.ceil(result?.count / itemsPerPage);

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {result?.results?.map((game) => {
                    return game.background_image && (
                        <Link key={game.id} href={`/games?id=${game.id}`}>
                            <Card className='hover:bg-amber-400 cursor-pointer h-full'>
                                <CardHeader>
                                    <CardTitle className='justify-center flex whitespace-break-spaces align-middle'>{game.name}</CardTitle>
                                    <Badge className='justify-center flex blue'>{game.metacritic}</Badge>
                                </CardHeader>
                                <CardContent className='flex justify-center'>
                                    <Image width={500} height={500} src={game?.background_image || ""} alt={game.name}
                                           className="flex justify-center rounded-md w-full h-full sm:w-auto sm:h-auto"/>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })
                }
            </div>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages}/>
            </div>
        </>
    )
}