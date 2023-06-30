import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { styled } from 'styled-components';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const CustomCarausel = styled(Slider)`
  width: 80%;

  .slick-slide div {
    height: 200px;

    .one {
      background-color: tomato;
    }
    .two {
      background-color: olive;
    }
    .three {
      background-color: skyblue;
    }
    .four {
      background-color: yellow;
    }
    .five {
      background-color: pink;
    }
  }

  .dots {
    background-color: #000;
  }
`;

const AutoCarausel = () => {
  return (
    <Container>
      <h1>Auto Carausel</h1>
      <CustomCarausel {...sliderSettings}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
      </CustomCarausel>
    </Container>
  );
};

export default AutoCarausel;
