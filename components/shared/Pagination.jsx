"use client";

import CustomButton from "./CustomButton";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="flex gap-4">
            <CustomButton
                text='Previous'
                handleClick={() => createPageURL(currentPage - 1)}
                disabled={Number(currentPage) <= 1}
            />
            <CustomButton
                text='Next'
                handleClick={() => createPageURL(currentPage + 1)}
                disabled={Number(currentPage) >= totalPages}
            />
        </div>
    )
}

export default Pagination