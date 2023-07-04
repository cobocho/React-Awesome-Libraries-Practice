const KakaoAuthCallback = () => {
  const params = new URL(document.location.toString()).searchParams;
  const CODE = params.get('code');

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
      console.log(access_token);
    }
  }

  getToken();

  return <></>;
};

export default KakaoAuthCallback;
