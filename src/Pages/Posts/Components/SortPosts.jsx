import React from 'react'


export default function SortPosts({ sortValue, setSortValue,setSearchParams }) {
    return (
        <div className="filter-posts mb-3 border rounded bg-white p-3">
            <h5 className="mb-3 ">Sắp xếp bài viết theo</h5>
            <select onChange={(e) => {
                setSortValue(e.target.value)
                setSearchParams({page: 1, sort:sortValue})
            }} value={sortValue}>
                <option value="latest">Mới nhất</option>
                <option value="most-interest">Quan tâm nhiều nhất</option>
            </select>
        </div>
    )
}
