
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import Accordion from "./Accordion/Accordion";
import ModalVideo from "./ModalVideo/ModalVideo";

const ListsVideo = ({ modules,courseSlug }) => {
  const isOpen = useSelector((state) => state.modalVideo.toOpen);

  const {isLoading, detailCourse, isError} = useSelector(
    (state) => state.courses.detailCourse
  );

  const {myCourse} = useSelector((state) => state.user)

  let checkUserHasCourse = myCourse.some(myCourseID => myCourseID.id === detailCourse.id);

  return (
    <>
      <div className="list-video my-3">
        {/* <h4 className="video-wrapper__title heading-title">Bài Học</h4> */}
        {/* isLoadingAccordions ?
              <>
                <Skeleton className="mb-4" height={66} />
                <Skeleton className="mb-4" height={66} />
                <Skeleton className="mb-4" height={66} />
              </> */}
        <div className="video-wrapper__content">
          {
              modules?.map((accordion) => (
                <Accordion {...accordion} courseSlug={courseSlug} key={accordion.id} checkUserHasCourse={checkUserHasCourse}/>
              ))
          }
        </div>
      </div>
      {isOpen && <ModalVideo />}
    </>
  );
};
export default ListsVideo;
