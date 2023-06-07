import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ id, children }) => {
  const elementRef = useRef(null);

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById(id);
    modalRoot.appendChild(elementRef.current);

    return () => modalRoot.removeChild(elementRef.current);
  }, [id]);

  return createPortal(<div>{children}</div>, elementRef.current);
};

Modal.defaultProps = {
  id: "modal",
};

export default Modal;
