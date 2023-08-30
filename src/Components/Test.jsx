import useComponentVisible from "../CustomHook/useComponentVisible";

export const DropDown = () => {
  const { ref, isComponentVisible } = useComponentVisible(true);
  return <div ref={ref}>{isComponentVisible && <p>Dropdown Component</p>}</div>;
};
