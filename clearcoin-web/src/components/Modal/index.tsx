import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	z-index: 2147483647;
`;

const Content = styled.div`
  width: 100%;
  z-index: 2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1;
`;


type ModalType = {
	onClose: () => void;
	visible: boolean;
}

const Modal = ({ children, onClose, visible }: React.PropsWithChildren<ModalType>) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const isEsc = e.key === 'Escape';

    if (isEsc) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.body.removeAttribute('style');
      document.removeEventListener('keydown', handleKeyDown, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return visible
    ? ReactDOM.createPortal(
        <Container>
          <Content>{children}</Content>
          <Overlay onClick={onClose} />
        </Container>,
        document.body
      )
    : null;
};

export default Modal;
