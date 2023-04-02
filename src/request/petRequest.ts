import { IPaginationQuery } from '@type/context';
import { PetCreateDto, PetUpdateAvatarDto, PetUpdateCoverDto } from '@type/pet';
import axios from './axios';

export class PetRequest {
  static getMyPets = async (params: IPaginationQuery) => {
    return await axios.get('/pets/my-pets', params);
  };

  static addPet = async (body: PetCreateDto) => {
    return await axios.post('/pets', body);
  };

  static getListPets = async (params: IPaginationQuery) => {
    return await axios.get('/pets', params);
  };

  static getPetInfo = async (id: any) => {
    return await axios.get(`/pets/${id}`);
  };

  static updateAvatar = async (petId: any, body: PetUpdateAvatarDto) => {
    return await axios.post(`/pets/${petId}/avatar`, body);
  };

  static updateCover = async (petId: any, body: PetUpdateCoverDto) => {
    return await axios.post(`/pets/${petId}/cover`, body);
  };
}
