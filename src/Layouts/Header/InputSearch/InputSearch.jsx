import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../../../Slice/SearchSlice";
import "./InputSearch.scss";
import { useDebouncedCallback } from "use-debounce";
import SearchResult from "../SearchResult/SearchResult";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ReplaceSlug } from "../../../CustomHook/ReplaceSlug";


const InputSearch = () => {
  
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem("searchHistory")) || []);
  const [searchParam, setSearchParam] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const ref = useRef(null);

  const [changeURLParam, setChangeURLParam] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const saveSearch = (search) => {
    const indexSearchHistory = searchHistory.indexOf(search);
    const foundItemIndex = 1;
    const lastItemIndex = searchHistory.length - 1;

    if (indexSearchHistory > -1) {
      searchHistory.splice(indexSearchHistory, foundItemIndex);
    } else {
      if (searchHistory.length === 5) {
        searchHistory.splice(lastItemIndex, foundItemIndex);
      }
    }
    searchHistory.unshift(search);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  };


  const handleSubmitSearchForm = (e) => {
    e.preventDefault();
    if (searchParam && !isLoading && isShow) {

      saveSearch(searchParam.replace(/\s+/g, " "));
      console.log(searchResult);
      if(!Object.values(searchResult)?.every(
        (array) => array.length === 0
      )){
        navigate("/search?term=" + searchParam);
      }
      setIsShow(false);
      // setSearchParam("")
    }
    // setSearchParam("")
  };

  const fetchData = async (param) => {
    setIsLoading(true)
    setIsShow(false)

    let searchResult = await dispatch(fetchSearchResult(param))
    let result = searchResult?.payload

    if (result) {
      setIsLoading(false)
      setIsShow(true)
      setSearchResult(result)
    }
  }

  const debounced = useDebouncedCallback((param) => {
    if (param.length > 1) {
      let slug = ReplaceSlug(param);

      if (location.pathname === "/search") {
        setChangeURLParam({
          term: slug,
        });
      }
      fetchData(slug)
    }
  }, 2000);





  useEffect(() => {

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShow(false)
      }
    };
    const handleClickInside = (event) => {
      if (searchParam.length >= 2 && ref.current && ref.current.contains(event.target)) {
        setIsShow(true)
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('click', handleClickInside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('click', handleClickInside, true);
    };
  }, [setIsShow]);

  return (
    <form ref={ref} onSubmit={handleSubmitSearchForm} action="">
      <div className="header-search">
        <AiOutlineSearch className="header-search__icon" />
        <input
          onChange={(e) => {

            let inputValue = e.target.value

            if (inputValue.length <= 1 || inputValue == "") {
              setIsLoading(false)
              setIsShow(false)
            } else {
              setIsLoading(true)
              setSearchParam(inputValue)
              debounced(inputValue);
            }

          }}

          type="search"
          placeholder="Tìm kiếm khóa học, giảng viên, blog ...."
          className="header-search__input"
        />

        <SearchResult
          isLoading={isLoading}
          isShow={isShow}
          setIsShow={setIsShow}
          searchResult={searchResult}
          searchParam={searchParam}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      </div>


    </form >
  );
};
export default InputSearch;

// nếu trùng => xóa phần tử trùng
// Không trùng => check số lượng
//  5 => xóa đầu
//  <5 => push
