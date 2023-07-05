import { useNavigate } from 'react-router-dom';

const KakaoAuthCallback = () => {
  const params = new URL(document.location.toString()).searchParams;
  const CODE = params.get('code');
  const navigation = useNavigate();

  async function getToken() {
    const CLIENT_ID = 'b8c9f853f20058820b559a43eace5382';
    const REDIRECT_URI = 'http://localhost:5173/kakao-login/auth';
    const res = await fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${CODE}`,
      {
        headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      }
    );
    const { access_token } = await res.json();

    if (access_token) {
      const res = await fetch(`https://kapi.kakao.com/v2/user/me`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      const { id } = await res.json();
      const userData = await fetch(`/api/oauth-redirect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      });

      console.log(userData);
      navigation('/daypicker');
    } else {
      alert('유효하지 않은 카카오 ID 입니다!');
      navigation('/daypicker');
    }

    // return userData;
  }

  getToken();

  return <></>;
};

export default KakaoAuthCallback;
