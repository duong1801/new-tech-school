import React from 'react'
import { useSearchParams } from "react-router-dom";

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import './Pagination.scss'

function createNumberArrayStartFromOne(Number) {
    return Array.from({ length: Number }, (_, i) => i + 1)
}

export default function Pagination({startPage, totalPage,handleChangePage, userSearchToPage}) {
    let condition = userSearchToPage ? userSearchToPage : startPage; 
    return (
        <div className="tech2-pagination text-center">
            <button
                onClick={() => {
                    if (condition - 1 > 0) handleChangePage(condition - 1)
                }}
                className={condition === 1 ? "tech2-page-button disable" : "tech2-page-button"}>
                <BsChevronLeft />
            </button>
            {
                createNumberArrayStartFromOne(totalPage).map((page, _) => {
                    return (
                        <button onClick={() => handleChangePage(page)} key={page} className={userSearchToPage === page ? 'active tech2-page-button' : 'tech2-page-button'}>{page}</button>
                    )
                })
            }
            <button
                onClick={() => {
                    if (condition < totalPage) handleChangePage(condition + 1)
                }}
                className={condition === totalPage ? "tech2-page-button disable" : "tech2-page-button"}>
                <BsChevronRight />
            </button>
        </div>
    )
}
