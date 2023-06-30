import { styled } from 'styled-components';
import SingleCarausel from '../components/Slick/SingleCarausel';
import AutoCarausel from '../components/Slick/AutoCarausel';
import CustomPagingCarausel from '../components/Slick/CustomPagingCarausel';
import MultipleCarausel from '../components/Slick/MultipleCarausel';
import CenterCarausel from '../components/Slick/CenterCarausel';
import CustomArrow from '../components/Slick/CustomArrows';

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

const SlickPage = () => {
  return (
    <Container>
      <SingleCarausel />
      <MultipleCarausel />
      <CenterCarausel />
      <AutoCarausel />
      <CustomPagingCarausel />
      <CustomArrow />
    </Container>
  );
};

export default SlickPage;
