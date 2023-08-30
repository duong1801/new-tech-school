import React, { useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineHistory } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchContent from "./Components/SearchContent";
import "./SearchResult.scss";

export default function SearchResult(props) {
  const { searchParam, isLoading, isShow, setIsShow, searchResult, searchHistory, setSearchHistory } = props;

  const handleDeleteHistoryItem = (indexClickItem) => {
    const newSearchHistory = searchHistory.filter((item, index) => index !== indexClickItem);
    setSearchHistory(newSearchHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newSearchHistory));
  };

  return (
    <>
      {isLoading &&
        <div className="search-result search-result__title">
          <span className="loader"></span>
          <p>Tìm "{searchParam}"</p>
        </div>
      }
      {
        (isShow && !isLoading)
        &&
        <div className="search-result search-result__content">
          {
            (
              (!Object.values(searchResult)?.every(
                (array) => array.length === 0
              ))
            )
            &&
            <>
              {Object.keys(searchResult)?.map((objProperties, index) => {
                if (searchResult[objProperties].length > 0) {
                  const data = { indexData: objProperties, resultArray: searchResult[objProperties] };
                  return(
                  <div className="search-result__content--wrap" onClick={() => setIsShow(false)}>
                    <SearchContent key={index} data={data} />
                  </div>
                  )
                }
              })}
            </>
          }
          {

            (Object.values(searchResult)?.every(
              (array) => array.length === 0
            ))
            &&
            <p> Không tìm thấy kết quả tìm kiếm "{searchParam}"</p>

          }
          {
            searchHistory.length > 0 && <div className=" search-history">
            <h4 className="search-history__title">Lịch sử tìm kiếm</h4>
            {searchHistory.map((keyword, index) => (
              <div key={index} className="search-history__item">
                <Link to={"/search?term=" + keyword}>
                  <AiOutlineHistory />
                  <span>{keyword}</span>
                </Link>
                <AiOutlineClose
                  style={{cursor:'pointer'}}
                  onClick={() => handleDeleteHistoryItem(index)}
                />
              </div>
            ))}
          </div>
          }
        </div>
      }
    </>
  );
}
