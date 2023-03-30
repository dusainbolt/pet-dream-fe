import { InputPet } from '@type/pet';
import Validate from '@utils/validate';
import * as yup from 'yup';

export const valuesCreatePet: InputPet = {
  name: '',
  nickname: '',
  birthday: null as any,
  gender: '' as any,
};

export const validateCreatePet = yup.object({
  name: yup
    .string()
    .required(Validate.require('Tên pet'))
    .min(2, Validate.during(2, 21))
    .max(21, Validate.during(2, 21)),
  nickname: yup
    .string()
    .required(Validate.require('Biệt danh'))
    .min(2, Validate.during(2, 21))
    .max(21, Validate.during(2, 21)),
  gender: yup.string().required(Validate.require('Giới tính')),
  birthday: yup.mixed().required(Validate.require('Sinh nhật')),
});
