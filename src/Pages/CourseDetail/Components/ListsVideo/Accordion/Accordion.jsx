import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getModalVideo,
  openModalVideo,
} from "../../../../../Slice/ModalVideoSlice";
import "./Accordion.scss";

const Accordion = ({ id, courseId, lessons, name, courseSlug, checkUserHasCourse }) => {

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();
  const dispatch = useDispatch();

  const openModal = (video) => {
    const action = getModalVideo(video);
    const actionOpenModal = openModalVideo();
    dispatch(action);
    dispatch(actionOpenModal);
  };

  return (
    <div className="accordion rounded-2">
      <div className="accordion-title p-4" onClick={() => setIsOpen(!isOpen)}>
        <h5>{name}</h5>
        <div
          className={
            isOpen ? "circle-plus closed opened" : "circle-plus closed"
          }>
          <div className="circle">
            <div className="horizontal"></div>
            <div className="vertical"></div>
          </div>
        </div>
      </div>

      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? {
              height: parentRef.current.scrollHeight + "px",
            }
            : {
              height: "0px",
            }
        }
      >

        <ul className="video-content px-4">
          {
            lessons?.map((video, index) => {
              return (
                <li className="video-content__item" key={video.id}>
                  {
                    checkUserHasCourse ?
                      <Link to={`/course/${courseSlug}/lesson/${video.id}`}>
                        {video.name}
                      </Link>
                      :
                      <div title="Bạn cần phải mua khoá học này">
                        {video.name}
                        {
                          video.status === "free" && (

                            <a
                              className="trial-link"
                              onClick={() => openModal(video)}
                              href="#!">
                              Học thử
                            </a>
                            )
                        }
                      </div>
                  }
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Accordion;
