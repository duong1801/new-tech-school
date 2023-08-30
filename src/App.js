import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./App.css";
import ModalForm from "./Components/ModalForm/ModalForm";
import ModalTeacher from "./Layouts/Sidebar/ModalTeacher";
import SideBarMobile from "./Layouts/Sidebar/SideBarMobile/SideBarMobile";
import Tech2Routes from "./Routes";

const App = () => {
  let init = 60;
  let fixOffset = 0;
  let lastScrollTop = 0;
  const [offset, setOffset] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  function scrollToShowMobileNav() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    // detect when it is bottom
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (st > lastScrollTop) {
      // downscroll code
      if (fixOffset < 60) {
        fixOffset = fixOffset + 55;
        setOffset(fixOffset);
      }
    } else {
      // upscroll code

      if (fixOffset > 0) {
        fixOffset = fixOffset - 55;
        setOffset(fixOffset);
      }
    }

    lastScrollTop = st <= 0 ? 0 : st;
    setOpacity(1 - fixOffset / init);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollToShowMobileNav, false);

    return () => window.removeEventListener("scroll", scrollToShowMobileNav);
  }, [lastScrollTop]);

  const handleSetModal = (value) => {
    setShowModal(value);
  };

  return (
    <>
      <Tech2Routes />
      {/* <div className="mobile--bottom"></div> */}
      <div
        className="mobile"
        style={{
          transform: `translateY(${offset}px) translateX(-50%)`,
          opacity: opacity,
        }}
      >
        <SideBarMobile handleSetModal={handleSetModal} />
      </div>
      <ModalTeacher showModal={showModal} handleSetModal={handleSetModal} />
      <ModalForm />
    </>
  );
};
export default App;
