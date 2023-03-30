import { getMyPetsStart, getPetSlice } from '@redux/slices/petSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { IPaginationQuery } from '@type/context';
import { useEffect } from 'react';

export const useGetMyPets = (token: string) => {
  const { loadedMyPets } = useAppSelector(getPetSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !loadedMyPets) {
      dispatch(getMyPetsStart({ page: 1, limit: 100 } as IPaginationQuery));
    }
  }, [loadedMyPets, token]);
};
