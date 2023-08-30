import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileAuthor from "./Components/ProfileAuthor";
import { fetchDetailAuthor } from "../../Slice/AuthorsSlice";
import "./Author.scss";
import { useLocation } from "react-router-dom";

const Author = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const author = useSelector(
    (state) => state.authors.detailAuthor.detailAuthor
  );
  const isLoadingAuthor = useSelector(
    (state) => state.authors.detailAuthor.isLoading
  );
  useEffect(() => {
    dispatch(fetchDetailAuthor(pathname));
  }, [dispatch, pathname]);
  return (
    <div className="author">
      <ProfileAuthor author={author} isLoadingAuthor={isLoadingAuthor} />
    </div>
  );
};
export default Author;
