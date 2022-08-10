import React, { useState } from "react";
import { Button, Modal } from "react-bulma-components";
import { Document, Page } from "react-pdf";

export const WhitePaperModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Modal show={visible} showClose={false} onClose={onClose} closeOnBlur>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>WHITEPAPER</Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <iframe
              src="https://drive.google.com/file/d/12l7zjjFXuW3_pUyFIITwSZFqcJQMat_h/preview"
              width="100%"
              height="100%"
              allow="autoplay"
            ></iframe>
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </>
  );
};
