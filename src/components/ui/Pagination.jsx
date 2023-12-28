'use client'

import React from 'react';
import { useSearchParams, usePathname } from "next/navigation";

const Pagination = ({ totalPages }) => {
    const visiblePages = 3;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const currentPage = Number(searchParams?.get('page')) || 1;

    const createPaginationLink = (page) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        return `${pathname}?${params.toString()}`;
    }

    const range = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const addPage = (page) => {
        return (
            <a
                key={page}
                className={`page-${currentPage === page ? 'active' : 'inactive'} flex rounded align-middle m-2 p-2 border ${currentPage === page ? 'bg-amber-400' : 'bg-gray-500'} hover:bg-amber-500`}
                href={createPaginationLink(page)}
            >
                {page}
            </a>
        );
    };

    const generatePagination = () => {
        const pages = [];

        // Previous button
        pages.push(
            <a
                key="prev"
                className={`page-prev flex rounded align-middle m-2 p-2 border bg-gray-500 hover:bg-amber-500`}
                href={createPaginationLink(currentPage - 1)}
            >
                Prev
            </a>
        );

        // Numbered pages
        if (totalPages <= visiblePages) {
            // Display all pages
            range(1, totalPages).forEach((page) => pages.push(addPage(page)));
        } else {
            // Display a limited range of pages around the current page
            const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
            const endPage = Math.min(totalPages, startPage + visiblePages - 1);

            if (startPage > 1) {
                pages.push(addPage(1));
                if (startPage > 2) {
                    pages.push(<span className='border-1 border-b-white rounded-md px-4 py-2 mx-1' key="ellipsis-start">...</span>);
                }
            }

            range(startPage, endPage).forEach((page) => pages.push(addPage(page)));

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pages.push(<span className='border-1 border-b-white rounded-md px-4 py-2 mx-1' key="ellipsis-end">...</span>);
                }
                pages.push(addPage(totalPages));
            }
        }

        // Next button
        pages.push(
            <a
                key="next"
                className={`page-next flex rounded align-middle m-2 p-2 border bg-gray-500 hover:bg-amber-500`}
                href={createPaginationLink(currentPage + 1)}
            >
                Next
            </a>
        );

        return pages;
    };

    return <div className="flex justify-center">{generatePagination()}</div>;
};

export default Pagination;