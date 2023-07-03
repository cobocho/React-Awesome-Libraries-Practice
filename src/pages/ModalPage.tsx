import { styled } from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';
import BasicModal from '../components/Modal/BasicModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 800px;
  height: fit-content;
  min-height: 300px;
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.2);
`;

const modalStyle = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(5px)',
    zIndex: 10,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    background: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '14px',
    zIndex: 10,
  },
};

const ModalPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Container>
      <Modal
        onRequestClose={() => setModalOpen(false)}
        isOpen={modalOpen}
        style={modalStyle}
      >
        <BasicModal setModalOpen={setModalOpen} />
      </Modal>
      <button onClick={() => setModalOpen(true)}>toggle</button>
    </Container>
  );
};

export default ModalPage;
