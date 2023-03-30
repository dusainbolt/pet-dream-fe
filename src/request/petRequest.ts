import { IPaginationQuery } from '@type/context';
import { PetCreateDto } from '@type/pet';
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
}
