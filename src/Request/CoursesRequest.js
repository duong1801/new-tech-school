import tech2ApiClient from "../Configs/tech2ApiClient";

const coursesRequest = {
  getCoursesByCategory(category) {
    const url = `${category}`;
    return tech2ApiClient.get(url);
  },
  getCoursesByFrontEnd() {
    const url = `course/categories-courses`;
    return tech2ApiClient.get(url);
  },
  getUnreleaseCourses() {
    const url = `course/unpublish`;
    return tech2ApiClient.get(url);
  },
  getInterestCourses() {
    const url = `course/featured`;
    return tech2ApiClient.get(url);
  },
  getDiscountCourses() {
    const url = `course/discount`;
    return tech2ApiClient.get(url);
  },
  getDetailCourse(courseID) {
    const url = `${courseID}`;
    return tech2ApiClient.get(url);
  },
  getDetailCourseLesson(videoID) {
    const url = `/lesson/${videoID}`;
    return tech2ApiClient.get(url);
  },
  getDetailVideo(lessonID) {
    const url = `/url-video/${lessonID}`;
    return tech2ApiClient.get(url);
  },
  getMyCourse() {
    const url = `/my-course`;
    return tech2ApiClient.get(url);
  },
};

export default coursesRequest;
