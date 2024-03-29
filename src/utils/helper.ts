import { AppError } from '@type/context';
import Constant from './constant';

export default class Helper {
  static objValue = (object: any, key: any): any => {
    return object[key];
  };

  static delay = (timeMilliSecond = 1000) => new Promise((resolve) => setTimeout(() => resolve(null), timeMilliSecond));

  static splitString = (hex: string | null | undefined, numStart = 6, numEnd = 4): string => {
    if (!hex?.length) return '';
    if (hex?.length < numStart + numEnd) return hex;
    return `${hex?.substring(0, numStart)}...${hex.substring(hex.length - numEnd)}`;
  };

  static isOkResponse = (response: AppError) => {
    return !response?.error && !response.errorCode;
  };

  static display = (val: any) => {
    return val || '😸';
  };

  static genPetAvatar = (filename) => `${process.env.NEXT_PUBLIC_API_URL}/${Constant.DIR.petAvatar}/${filename}`;

  static genPetCover = (filename) => `${process.env.NEXT_PUBLIC_API_URL}/${Constant.DIR.petCover}/${filename}`;
}
