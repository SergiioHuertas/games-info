'use client'

import React, { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function Filters() {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const toggleFilter = () => {
        setFilterOpen(!isFilterOpen);
    };

    const handleScoreChange = () => {
        const params = new URLSearchParams(searchParams);
        const minValue = document.getElementById('score-min').value;
        const maxValue = document.getElementById('score-max').value;

        if (minValue && maxValue && minValue <= maxValue) {
            params.set('metacritic', `${minValue},${maxValue}`);
        } else {
            params.delete('metacritic');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="relative">
            <div
                className="text-l font-bold cursor-pointer flex gap-2"
                onClick={toggleFilter}
            >
                <p>Filters</p>
                {isFilterOpen ? <ChevronDownIcon className="w-5 h-5 text-gray-400 left-3 top-3" /> : <ChevronRightIcon className="w-5 h-5 text-gray-400 left-3 top-3" />}
            </div>
            {isFilterOpen && (
                <div className="mt-2 p-4 bg-gray-600 border rounded shadow-md">
                    <div className="text-black justify-center align-middle">
                        Metacritic score
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="score-min" className="sr-only">
                            Minimum metacritic score
                        </label>
                        <input
                            id="score-min"
                            name="score-min"
                            placeholder="0"
                            className="w-auto border block border-gray-300 rounded-md pl-4 pr-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            type="number"
                            defaultValue={searchParams.get('metacritic')?.split(',')[0]}
                            min="0"
                            max="100"
                            onChange={handleScoreChange}
                        />
                        <label htmlFor="score-max" className="sr-only">
                            Maximum metacritic score
                        </label>
                        <input
                            id="score-max"
                            name="score-max"
                            placeholder="100"
                            className="w-auto border block border-gray-300 rounded-md pl-4 pr-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            type="number"
                            defaultValue={searchParams.get('metacritic')?.split(',')[1]}
                            min="0"
                            max="100"
                            onChange={handleScoreChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
