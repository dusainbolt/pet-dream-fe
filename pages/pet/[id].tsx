import PetProfileComponent from '@components/PetProfile/PetProfileComponent';
import { useGetAccountInfo } from '@hooks/useGetAccountInfo';
import { useRedirectAuth } from '@hooks/useRedirectAuth';
import { getPetInfoSuccess } from '@redux/slices/petSlice';
import { wrapper } from '@redux/store';
import { PetRequest } from '@request/petRequest';
import { SSRContext } from '@type/context';
import { Pet } from '@type/pet';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { FC, Fragment } from 'react';
import { END } from 'redux-saga';

const PetProfile: FC<any> = () => {
  const token = useRedirectAuth({ redirect: '/', isEmptyToken: false });
  useGetAccountInfo(token as string);
  //   useSocket();
  return (
    <Fragment>
      <Head>
        <title>PetDream</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <PetProfileComponent />
    </Fragment>
  );
};

export default PetProfile;

export const getStaticPaths: GetStaticPaths = async () => {
  const listPets: Pet[] = (await PetRequest.getListPets({ limit: 30, page: 1 })).data;
  const paths = listPets.map((item) => ({ params: { id: item.id.toString() } }));
  return { paths, fallback: true };
};

export const getStaticProps = wrapper.getStaticProps(
  (store): SSRContext | any =>
    async (context: GetStaticPropsContext | any) => {
      // await Helper.delay(1500);
      const id: any = context.params.id;
      // request here
      const petInfo = (await PetRequest.getPetInfo(id)).data;
      // dispatch data store here here
      store.dispatch(getPetInfoSuccess(petInfo));
      // end the saga
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return { props: { id } };
    }
);
