import { PayloadName } from '@redux/reducer';
import { IPaginationQuery } from '@type/context';
import { Pet, PetCreateDto, PetUpdateAvatarDto, PetUpdateCoverDto } from '@type/pet';

export type GetMyPetsStartAction = Record<PayloadName, IPaginationQuery>;
export type GetMyPetsSuccessAction = Record<PayloadName, Pet[]>;

export type AddPetStartAction = Record<PayloadName, PetCreateDto>;
export type AddPetSuccessAction = Record<PayloadName, Pet>;

export type GetPetInfoSuccessAction = Record<PayloadName, Pet>;

export type UpdateAvatarPetStartAction = Record<PayloadName, { petId: any; body: PetUpdateAvatarDto }>;
export type UpdateAvatarPetSuccessAction = Record<PayloadName, Pet>;

export type UpdateCoverPetStartAction = Record<PayloadName, { petId: any; body: PetUpdateCoverDto }>;
export type UpdateCoverPetSuccessAction = Record<PayloadName, Pet>;
