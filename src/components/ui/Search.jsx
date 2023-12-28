'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useDebouncedCallback } from "use-debounce";
import {config} from "@/config";



export default function Search({ placeholder }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((searchQuery) => {
        const params = new URLSearchParams(searchParams);
        if (searchQuery) {
            params.set('search', searchQuery);
        } else {
            params.delete('search');
        }
        replace(`${pathname}?${params.toString()}`);
    }, config.common.waitBetweenSearches);

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                id="search"
                name="search"
                className="block w-full border-gray-300 rounded-md pl-10 pr-3 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={placeholder}
                type="search"
                defaultValue={searchParams.get('search')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
        </div>
    );
}