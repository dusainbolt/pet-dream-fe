import DashboardComponent from '@components/Dashboard/DashboardComponent';
import { useGetAccountInfo } from '@hooks/useGetAccountInfo';
import { useGetMyPets } from '@hooks/useGetMyPets';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import Head from 'next/head';
import { FC, Fragment } from 'react';

const InboxDefaultPage: FC<any> = () => {
  const token = useRedirectAuth({ redirect: '/', isEmptyToken: false });
  useGetAccountInfo(token as string);
  useGetMyPets(token as string);
  // useSocket();
  return (
    <Fragment>
      <Head>
        <title>PetDream</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {token && <DashboardComponent />}
    </Fragment>
  );
};

export default InboxDefaultPage;
