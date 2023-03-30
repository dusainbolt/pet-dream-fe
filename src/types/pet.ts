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

// export interface GetMyTopicsDto extends IPaginationQuery {
//   lastMessage?: string;
//   account?: string;
// }

// export interface GetSystemTopicsDto extends IPaginationQuery {
//   lastMessage?: string;
//   account?: string;
// }

// export interface GetTopicDetailDto {
//   account?: string;
// }

// export interface GetTopicMessagesDto {
//   topicId?: number;
//   query?: IPaginationQuery & {
//     latestMessageId?: number;
//   };
// }

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

  // newTopicId?: number;
  // loadingGetTopic?: boolean;
  // loadingGetTopics?: boolean;
  // loadingGetTopicMessages?: boolean;
  // loadingLoadMoreTopicMessages?: boolean;
  errorGetMyPets?: AppError;
  errorAddPet?: AppError;
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
