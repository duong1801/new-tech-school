import React, { useEffect } from 'react';
import { BiLabel } from "react-icons/bi";
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCategory } from '../../../Slice/CategorySlice';

export default function CategorySidebar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.category.category);
  const isLoading = useSelector((state) => state.category.category.isLoading);

  const IsLoadingCategory = () => {
    return (
      <div className="mb-3 border rounded bg-white p-3 position-sticky">
        <Skeleton width={200} height={30} />
        <div className="mt-3">
        <Skeleton width={100} count={3} />
        </div>
      </div>
    )
  }

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);

  return (
    <>
      {isLoading ? (
        <IsLoadingCategory />
      ) : (
        <div className="mb-3 border rounded bg-white p-3 categories-sidebar">
          <h2 className="mb-3 ">Chuyên mục</h2>
          {categories?.map((category) => (
            <Link
              to={`/article/category/${category.id}`}
              key={category.id}
              className="hover"
            >
              <div className='d-flex justify-content-start align-items-center'>
                <BiLabel />
                <p className="fw-semibold py-1 px-3">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
