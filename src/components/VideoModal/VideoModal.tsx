import { Button, Modal } from "react-bulma-components";

export const VideoModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Modal
        show={visible}
        onClose={onClose}
        closeOnBlur
        className="video-modal"
      >
        <Modal.Card>
          <Modal.Card.Body>
            <video autoPlay controls>
              <source src="/intro.mp4" type="video/mp4" />
            </video>
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  );
};
