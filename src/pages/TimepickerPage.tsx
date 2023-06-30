import { styled } from 'styled-components';

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

const TimepickerPage = () => {
  return <Container></Container>;
};

export default TimepickerPage;
