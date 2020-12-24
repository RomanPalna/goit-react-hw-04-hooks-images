import { useEffect } from "react";
import { createPortal } from "react-dom";

const MODAL_ROOT = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code !== "Escape") {
        return;
      }

      onClose();
    });
  });

  return createPortal(
    <div onClick={onClose} className="Overlay">
      <div>{children}</div>
    </div>,
    MODAL_ROOT
  );
}

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleOnClose);
//   }

//   componentWillUnmount() {
//     window.addEventListener('keydown', this.handleOnClose);
//   }

//   handleOnClose = e => {
//     if (e.code !== 'Escape') {
//       return;
//     }

//     this.props.onClose();
//   };

//   render() {
// return createPortal(
//   <div onClick={this.props.onClose} className="Overlay">
//     <div>{this.props.children}</div>
//   </div>,
//   MODAL_ROOT,
// );
//   }
// }
