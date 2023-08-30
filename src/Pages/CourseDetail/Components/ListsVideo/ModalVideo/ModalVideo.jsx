import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideoCourse } from "../../../../../Slice/CoursesSlice";
import { closeModalVideo } from "../../../../../Slice/ModalVideoSlice";
import "./ModalVideo.scss";

const ModalVideo = () => {
  const isOpen = useSelector((state) => state.modalVideo.toOpen);
  const videoData = useSelector((state) => state.modalVideo.modalVideoData);
  const detailVideo = useSelector((state) => state.courses.detailVideo.detailVideo)


  const dispatch = useDispatch();
  const closeModal = () => {
    const action = closeModalVideo();
    dispatch(action);
  };

  useEffect(() =>{
    let video_id = videoData?.video_id
    if(video_id){
      dispatch(fetchVideoCourse(video_id));
    }
  },[videoData?.video_id])
  return (
    <>
      <div onClick={() => closeModal()} className="modal-background"></div>
      <div className={isOpen ? "modal-product fade" : "modal-product"}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{videoData?.name}</h5>
              <button
                onClick={() => closeModal()}
                type="button"
                className="close"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={detailVideo}
                height="440"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalVideo;
