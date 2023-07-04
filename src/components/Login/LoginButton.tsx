import { styled } from 'styled-components';

const Container = styled.button`
  padding: 20px 40px;
  background-color: #ffde22;
  border: none;
  border-radius: 10px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const LoginButton = () => {
  function loginWithKakao() {
    const CLIENT_ID = 'b8c9f853f20058820b559a43eace5382';
    const REDIRECT_URI = 'http://localhost:5173/kakao-login/auth';
    const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = AUTH_URL;
  }

  return <Container onClick={loginWithKakao}>카카오로 로그인</Container>;
};

export default LoginButton;
