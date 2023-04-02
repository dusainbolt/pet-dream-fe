import { AppError, IPaginationQuery } from './context';

export enum PetGender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum PetTail {
  NONE = 'none',
  MAU = 'mau',
  COC = 'coc',
  DAI = 'dai',
}

export enum PetEye {
  HAZEL = 'hazel',
  YELLOW_AMBER = 'yellow_amber',
  GREEN = 'green',
  BLUE = 'blue',
  ORANGE = 'orange_copper',
  ODD_COLORED = 'odd_colored',
  DICHROIC = 'dichroic',
}

export enum PetEar {
  THANG = 'thang',
  CUP = 'cup',
}

export enum PetHair {
  DAI = 'dai',
  NGAN = 'ngan',
  BRUSH = 'brush',
  THANG = 'thang',
}

export type Pet = {
  id: number;
  createdOn: string;
  updatedOn: string;
  name: string;
  nickName: string;
  bio: string;
  favorite: string;
  birthday: string;
  avatar: string;
  cover: string;
  gender: PetGender;
  tail: PetTail;
  ear: PetEar;
  eye: PetEye;
  hair: PetHair;
  accountId: number;
  petColorId: number;
  petSpecialTypeId: number;
  petColor: PetValue;
  petSpecialType: PetValue;
};

export type InputPet = {
  name: string;
  nickname: string;
  birthday: number;
  gender: PetGender;
};

export type PetCreateDto = InputPet;

export type PetUpdateAvatarDto = {
  avatar: File;
};

export type PetUpdateCoverDto = {
  cover: File;
};

export type PetValue = {
  id: number;
  createdOn: string;
  updatedOn: string;
  value: string;
};

export type PetSlice = {
  // state logic
  loadingGetMyPets?: boolean;
  loadingAddPet?: boolean;
  loadingUpdateAvatarPet?: boolean;
  loadingUpdateCoverPet?: boolean;

  // newTopicId?: number;
  // loadingGetTopic?: boolean;
  // loadingGetTopics?: boolean;
  // loadingGetTopicMessages?: boolean;
  // loadingLoadMoreTopicMessages?: boolean;
  errorGetMyPets?: AppError;
  errorAddPet?: AppError;
  errorUpdateAvatarPet?: AppError;
  errorUpdateCoverPet?: AppError;
  // errorGetTopics?: AppError;
  // errorGetTopicMessages?: AppError;
  loadedMyPets?: boolean;

  // query logic
  queryGetMyPets?: IPaginationQuery;
  // data
  myPets?: Pet[];
  petInfo?: Pet;
  // listTopics?: Topic[];
  // topic?: Topic;
  // topicMessages?: Message[];
};
