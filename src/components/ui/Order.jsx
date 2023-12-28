'use client'

import React, { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function Order() {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const selectedOrder = searchParams.get('ordering');

    const toggleFilter = () => {
        setFilterOpen(!isFilterOpen);
    };

    const toggleOrder = (order) => {
        const params = new URLSearchParams(searchParams);
        params.set('ordering', selectedOrder === order ? `-${order}` : order);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative">
            <div
                className="w-auto text-l font-bold cursor-pointer flex gap-2"
                onClick={toggleFilter}
            >
                <p>Order by</p>
                {isFilterOpen ? <ChevronDownIcon className="w-5 h-5 text-gray-400 left-3 top-3" /> : <ChevronRightIcon className="w-5 h-5 text-gray-400 left-3 top-3" />}
            </div>
            {isFilterOpen && (
                <div className="mt-2 p-4 bg-gray-600 border rounded shadow-md flex gap-2">
                    <div
                        className={`${selectedOrder === 'name' ? 'bg-green-400' : ''} ${selectedOrder === '-name' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('name')}
                    >
                        Name
                    </div>
                    <div
                        className={`${selectedOrder === 'metacritic' ? 'bg-green-400' : ''} ${selectedOrder === '-metacritic' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('metacritic')}
                    >
                        Metacritic
                    </div>
                    <div
                        className={`${selectedOrder === 'rating' ? 'bg-green-400' : ''} ${selectedOrder === '-rating' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('rating')}
                    >
                        Rating
                    </div>
                    <div
                        className={`${selectedOrder === 'released' ? 'bg-green-400' : ''} ${selectedOrder === '-released' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('released')}
                    >
                        Released
                    </div>
                    <div
                        className={`${selectedOrder === 'added' ? 'bg-green-400' : ''} ${selectedOrder === '-added' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('added')}
                    >
                        Added
                    </div>
                    <div
                        className={`${selectedOrder === 'created' ? 'bg-green-400' : ''} ${selectedOrder === '-created' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('created')}
                    >
                        Created
                    </div>
                    <div
                        className={`${selectedOrder === 'updated' ? 'bg-green-400' : ''} ${selectedOrder === '-updated' ? 'bg-red-400' : ''} m-2 p-4 flex justify-center align-middle rounded border w-auto hover:bg-amber-400 cursor-pointer text-black`}
                        onClick={() => toggleOrder('updated')}
                    >
                        Updated
                    </div>
                </div>
            )}
        </div>
    );
}
