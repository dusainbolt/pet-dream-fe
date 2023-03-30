import { PayloadName } from '@redux/reducer';
import { IPaginationQuery } from '@type/context';
import { Pet, PetCreateDto } from '@type/pet';

export type GetMyPetsStartAction = Record<PayloadName, IPaginationQuery>;
export type GetMyPetsSuccessAction = Record<PayloadName, Pet[]>;

export type AddPetStartAction = Record<PayloadName, PetCreateDto>;
export type AddPetSuccessAction = Record<PayloadName, Pet>;

export type GetPetInfoSuccessAction = Record<PayloadName, Pet>;
