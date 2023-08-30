import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiFillIeCircle } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import RowCourses from "../../../Components/RenderCourses/RowCourses/RowCourses";
import DemoImage from '../User.jpg'
import "./ProfileAuthor.scss";
import Skeleton from "react-loading-skeleton";

const ProfileAuthor = ({ author, isLoadingAuthor }) => {




  return (
    <>
      <Container>
        <div className="profile-author py-4">
          <div className="profile__card">
            <div className="profile__top">
              <div className="profile__background" aria-hidden />
              <div className="profile__image px-xl-4 px-3">
                {isLoadingAuthor ? (
                  <Skeleton className="mb-4" width={200} height={200} circle />
                ) : (
                  <img
                    src={author?.avatar ? author.avatar : DemoImage}
                    alt="img-author"
                    className="p-2 bg-white"
                  />
                )}
              </div>
              {isLoadingAuthor ? (
                <div className="px-lg-5">
                  <Skeleton count={4} />
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-center px-xl-4 px-3">
                  <div>
                    <div className="profile__name mt-3">
                      <h2>{author?.name}</h2>
                    </div>
                    <div className="profile__phone mt-3 d-flex align-items-center ">
                      <FcPhoneAndroid />
                      <p className="ms-2">Liên hệ: {author?.phone}</p>
                    </div>
                    <div className="profile__email py-2 d-flex align-items-center">
                      <MdOutlineMail />
                      <p className="ms-2">Email: {author?.email}</p>
                    </div>
                  </div>
                  <div className="profile__social align-items-center">
                    {author?.social?.website && (
                      <div className="website">
                        <AiFillIeCircle className="ms-4 fs-1 web" />
                        <div className="abs">
                          {author?.social?.website.map((web,_) => (
                            <a href={web} className="d-block">
                              {web}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    {author?.social?.facebook && (
                      <a
                        href={`${author?.social.facebook}`}
                        className="facebook"
                      >
                        <BsFacebook className="ms-4 fs-2" />
                      </a>
                    )}
                    {author?.social?.github && (
                      <a
                        href={`${author?.social.github}`}
                        className="youtube"
                      >
                        <BsYoutube className="ms-4 fs-1" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="profile__body px-3 px-xl-4 mt-3">
              {isLoadingAuthor ? (
                <Skeleton count={3}></Skeleton>
              ) : (
                <>
                  <h4 className="py-1">Về giảng viên</h4>
                  <div
                    className="about-author"
                    dangerouslySetInnerHTML={{ __html: `${author?.description}` }}
                  ></div>
                </>
              )}
            </div>
            {/* {
              author?.courses && <div className="profile__bottom px-3 px-xl-4 mt-5 mb-3">
                <RowCourses
                  rowTitle="Khóa học của giảng viên"
                  courses={author.courses}
                />
              </div>
            } */}

          </div>
        </div>
      </Container>
    </>
  );
};
export default ProfileAuthor;
