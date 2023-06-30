import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { styled } from 'styled-components';

interface ArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    ></div>
  );
}

const sliderSettings = {
  // 하단 네비게이션 버튼 유무
  dots: true,
  // 무한 반복 여부
  infinite: true,
  // 슬라이드 이동시 속도 (ms)
  speed: 500,
  // 한 번에 보여지는 슬라이드 개수
  slidesToShow: 1,
  // 한 번에 이동할 슬라이드 칸수
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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

  .slick-prev,
  .slick-next {
    height: fit-content;
  }
`;

const CustomArrow = () => {
  return (
    <Container>
      <h1>Custom Arrow</h1>
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

export default CustomArrow;