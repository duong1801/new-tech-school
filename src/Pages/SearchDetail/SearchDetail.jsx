import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ReplaceSlug } from "../../CustomHook/ReplaceSlug";
import Header from "../../Layouts/Header/Header";
import { fetchSearchResult } from "../../Slice/SearchSlice";
import SearchDetailContent from "./Components/SearchDetailContent";
import "./SearchDetail.scss";

export default function SearchDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchResult = useSelector((state) => state.searchResult.search.data);
  const isLoading = useSelector((state) => state.searchResult.search.isLoading);
  let condition = Object.values(searchResult).every(
    (array) => array.length === 0
  );
  const param = searchParams.get("term");
  const [is, setIs] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    if (param) {
      let slug = ReplaceSlug(param);
      dispatch(fetchSearchResult(slug));
    }
  }, [param]);
  return (

      <div className="search-detail">
        <h3 className="search-detail__heading">
          {isLoading ? (
            <>
              <Skeleton count={10} height={20} />
            </>
          ) : (
            <>
              {condition
                ? `Không có kết quả tìm kiếm cho "${param}"`
                : `Kết quả tìm kiếm cho "${param}"`}
            </>
          )}
        </h3>
        {!isLoading && <div className="search-detail__content">
          <div className="content__container">
            {/* {Object.keys(searchResult)} */}
            { Object.keys(searchResult).map((key, index) => {
              if (searchResult[key].length) {
                return (
                  <SearchDetailContent
                    data={searchResult[key]}
                    title={key}
                    key={index}
                  />
                );
              }
            })}
          </div>
        </div>}
      </div>
  );
}
