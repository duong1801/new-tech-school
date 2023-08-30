
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import CircularProgressBar from "../../Components/CircularProgressBar/CircularProgressBar";

import { fetchDetailCourse, fetchLessonCourse, fetchVideoCourse } from "../../Slice/CoursesSlice";
import DescriptionCourse from "../CourseDetail/Components/DescreptionCourse/DescriptionCourse";

import ListsVideo from "../CourseDetail/Components/ListsVideo/ListsVideo";
import "./VideoDetail.scss";

const VideoDetail = () => {
  const [hidePlaylist, setHidePlaylist] = useState(false);
  const { whatCourse, lessonID } = useParams();
  const [urlVideo, setUrlVideo] = useState('')
  const [videoModule, setVideoModule] = useState([])

  const videoDetail = useSelector(
    (state) => state.courses.detailLesson.detailLesson
  );
  const isLoadingVideoDetail = useSelector(
    (state) => state.courses.detailLesson.isLoading
  );

  const isLoadingVideo = useSelector(
    (state) => state.courses.detailVideo.isLoading
  );

  const {isLoading, detailCourse} = useSelector(
    (state) => state.courses.detailCourse
  );

  const { myCourse } = useSelector((state) => state.user)

  let checkUserHasCourse = myCourse.some(myCourseID => {
    return (myCourseID.id === detailCourse?.id || myCourseID.id === videoDetail?.course?.id)
  });

  const dispatch = useDispatch();

  const IsLoadingComponent = () => {
    return (
      <>
        <Skeleton height={394} width className="mb-3" />
        <Skeleton count={3} />
      </>
    );
  };

  const renderingVideo = async () => {
    let getLessonCourse = await dispatch(fetchLessonCourse(lessonID));
    if (getLessonCourse?.payload) {
      let video_id = getLessonCourse?.payload?.video_id

      let getVideoUrl = await dispatch(fetchVideoCourse(video_id));
      let getModuleCourse = await dispatch(fetchDetailCourse(getLessonCourse?.payload?.course?.url))

      getVideoUrl?.payload && setUrlVideo(getVideoUrl?.payload)
      getModuleCourse?.payload && setVideoModule(getModuleCourse?.payload?.modules)
    }
  }

  useEffect(() => {
    renderingVideo()
  }, [lessonID]);

  // useEffect(() => {
  //   const getVideo = async (videoId) => {
  //     try {
  //       setIsLoading(true);

  //       dispatch(fetchVideoCourse(videoId))



  //       // const data = await res.json();
  //       // const playerObj = document.querySelector(".player");

  //       // const link = `https://unicode.vn/api/video.php?id=${videoId}`;

  //       // const res = await fetch(link);
  //       // const data = await res.json();
  //       // playerObj.innerHTML = data.embed_code;

  //       // eslint-disable-next-line no-undef
  //       // const player = new SV.Player({ videoId: videoId });

  //       // setTimeout(() => {
  //       //     const duration = player.getDuration();
  //       //     console.log(`Duration: ${duration}`);
  //       // }, 1000);

  //       // player.bind('progress', (e) => {
  //       //     console.log(e.data);
  //       // })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   setIsLoading(false);
  //   videoDetail?.video_id && getVideo(videoDetail.video_id);
  //   //  getVideo();
  // }, [videoDetail]);

  return (
    <>
      {
        myCourse.length > 0 ?
          <>
            {
              checkUserHasCourse ?
                <div className="video-detail">
                  <div className="middle-sidebar-bottom background-whiteGray">
                    <div className="py-4">
                      <Container>
                        <Row>
                          <Col xs={hidePlaylist ? 12 : 8}>
                            {isLoadingVideoDetail ? (
                              <Skeleton className="mb-3" height={38} />
                            ) : (
                              <h2 className="video-title">{videoDetail?.name}</h2>
                            )}
                            {isLoadingVideoDetail ? (
                              <IsLoadingComponent />
                            ) : (
                              <div className="video-detail-wrapper">
                                <div className="player mb-4">
                                  {isLoadingVideo && <Skeleton height={394} width />}
                                  {!isLoadingVideo && <iframe src={urlVideo} width='630' height='394' allowFullScreen></iframe>}
                                </div>
                                <>
                                  {/* <div className="player-navigation mb-3">
                                                                   <button>Bài học trước</button>
                                                                   <button>Bài học tiếp theo</button>
                                                               </div> */}
                                  <div className="hide-playlist">
                                    {hidePlaylist === false && (
                                      <button onClick={() => setHidePlaylist(true)}>
                                        Ẩn nổi dung khoá học
                                      </button>
                                    )}
                                    {hidePlaylist && (
                                      <button onClick={() => setHidePlaylist(false)}>
                                        Hiển thị nổi dung khoá học
                                      </button>
                                    )}
                                  </div>
                                  <div className="video-text mt-3">
                                    {/* <p>{videoDetail?.description}</p> */}
                                    <DescriptionCourse
                                      description={videoDetail?.description}
                                    />
                                  </div>
                                </>
                              </div>
                            )}
                          </Col>
                          <>
                            {hidePlaylist === false && (
                              <Col xs={4}>
                                <div>
                                  {/* <CircularProgressBar percentage={percentage} /> */}
                                  {isLoadingVideoDetail ? (
                                    <Skeleton height={38} width />
                                  ) : (
                                    <h3>Nội dung khoá học: </h3>
                                  )}
                                  {
                                    isLoading || isLoadingVideoDetail || isLoadingVideo
                                      ?
                                      <div className="mt-2">
                                        <Skeleton className="mb-4" height={66} />
                                        <Skeleton className="mb-4" height={66} />
                                        <Skeleton className="mb-4" height={66} />
                                      </div>
                                      :
                                      <ListsVideo modules={videoModule} courseSlug={whatCourse} />
                                  }
                                </div>
                              </Col>
                            )}
                          </>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </div>
                :
                <div className="unauthorized">
                  <div>
                    <h3>Trang này không tồn tại :( </h3>
                    <Link to="/" className="tech2-btn mt-3">Quay về trang chủ</Link>
                  </div>
                </div>
            }
          </>
          :
            <div className="video-detail">
              <div className="middle-sidebar-bottom background-whiteGray">
                <div className="py-4">
                  <Container>
                    <Row>
                      <Col xs={8}>
                        <Skeleton className="mb-3" height={38} />

                        <IsLoadingComponent />
                        <div className="video-detail-wrapper">
                          <div className="player mb-4">
                            <Skeleton height={394} width />
                          </div>
                        </div>
                      </Col>

                      <Col xs={4}>
                        <Skeleton height={38} width />
                        <div className="mt-2">
                          <Skeleton className="mb-4" height={66} />
                          <Skeleton className="mb-4" height={66} />
                          <Skeleton className="mb-4" height={66} />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
      }

    </>
  );
};
export default VideoDetail;
