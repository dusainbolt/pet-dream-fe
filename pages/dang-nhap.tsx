import LoginComponent from '@components/Login/LoginComponent';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import Head from 'next/head';
import { FC, Fragment } from 'react';

const LoginPage: FC<any> = () => {
  const token = useRedirectAuth({ redirect: '/pet-cua-ban', isEmptyToken: true });

  return (
    <Fragment>
      <Head>
        <title>PetDream | Đăng nhập</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {!token && <LoginComponent />}
    </Fragment>
  );
};

export default LoginPage;
