import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchContent.scss";

export default function SearchContent(props) {
  const { indexData, resultArray } = props.data;
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (indexData == "teachers") {
      setTitle("Giảng viên");
    }
    if (indexData == "articles") {
      setTitle("Bài viết");
    }
    if (indexData == "courses") {
      setTitle("Khóa học");
    }
  }, []);
  return (
    <>
      <h4>{title}</h4>
      {resultArray.map((result, index) => {
        return (
          <div key={index} className="content__item">
            <div className="content__item--image">
              <Link to={result.link || result.url || `/article/detail/${result.id}`}>
                <img src={result.image || result.avatar} />
              </Link>
            </div>
            <Link to={result.link || result.url || `/article/detail/${result.id}`}>
              <span className="content__item--text">
                {result.name || result.title}
              </span>
            </Link>
          </div>
        );
      })}
    </>
  );
}
