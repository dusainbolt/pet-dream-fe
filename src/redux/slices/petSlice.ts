/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  AddPetStartAction,
  AddPetSuccessAction,
  GetMyPetsStartAction,
  GetMyPetsSuccessAction,
  GetPetInfoSuccessAction,
} from '@redux/actions/petAction';
import { GetMyTopicsStartAction, GetMyTopicsSuccessAction } from '@redux/actions/topicAction';
import { getPersistConfig } from '@redux/storage';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { ErrorAction } from '@type/context';
import { PetSlice } from '@type/pet';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import { RootState } from '../reducer';
import { AppState } from '../store';

const initialState: PetSlice = {};

const hydrate = createAction<AppState>(HYDRATE);

const sliceName = 'petSlice';

const petSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    // get topics dispatch
    // eslint-disable-next-line no-empty-pattern
    getMyPetsStart: (state: PetSlice, { payload }: GetMyPetsStartAction) => {
      state.loadingGetMyPets = true;
    },
    getMyPetsSuccess: (state: PetSlice, { payload }: GetMyPetsSuccessAction) => {
      state.loadingGetMyPets = false;
      state.errorGetMyPets = undefined;
      state.myPets = payload;
      state.loadedMyPets = true;
    },
    getMyPetsError: (state: PetSlice, { payload }: ErrorAction) => {
      state.loadingGetMyPets = false;
      state.errorGetMyPets = payload;
      state.loadedMyPets = true;
    },

    // add pet dispatch
    addPetStart: (state: PetSlice, { payload }: AddPetStartAction) => {
      state.loadingAddPet = !!payload.name;
    },
    addPetSuccess: (state: PetSlice, { payload }: AddPetSuccessAction) => {
      state.loadingAddPet = false;
      state.errorAddPet = undefined;
      state.myPets?.unshift(payload);
    },
    addPetError: (state: PetSlice, { payload }: ErrorAction) => {
      state.loadingAddPet = false;
      state.errorAddPet = payload;
    },

    // pet info dispatch
    getPetInfoSuccess: (state: PetSlice, { payload }: GetPetInfoSuccessAction) => {
      state.petInfo = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload[sliceName],
      };
    });
  },
});

export const getPetSlice = (state: RootState): PetSlice => state[sliceName];

export const {
  getMyPetsStart,
  getMyPetsSuccess,
  getMyPetsError,
  addPetStart,
  addPetSuccess,
  addPetError,
  getPetInfoSuccess,
} = petSlice.actions;

export default persistReducer(getPersistConfig(sliceName, { whitelist: [''] }), petSlice.reducer);
