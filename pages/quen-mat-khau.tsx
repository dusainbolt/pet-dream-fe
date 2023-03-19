import ForgotPasswordComponent from '@components/ForgotPassword/ForgotPasswordComponent';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import Head from 'next/head';
import { FC, Fragment } from 'react';

const ForgotPasswordPage: FC<any> = () => {
  const token = useRedirectAuth({ redirect: '/bang-dieu-khien', isEmptyToken: true });

  return (
    <Fragment>
      <Head>
        <title>PetDream | Quên mật khẩu</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {!token && <ForgotPasswordComponent />}
    </Fragment>
  );
};

export default ForgotPasswordPage;
