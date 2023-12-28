'use client'

import {useParams} from "next/navigation";

export default function Page() {
    const params = useParams();
    const {id} = params;
    return (
        <div>
            <h1>Game {id}</h1>
        </div>
    )
}