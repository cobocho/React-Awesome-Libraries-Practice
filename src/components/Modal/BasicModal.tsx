import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div``;

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasicModal = ({ setModalOpen }: Props) => {
  return (
    <Container>
      <button onClick={() => setModalOpen(false)}>x</button>
    </Container>
  );
};

export default BasicModal;
