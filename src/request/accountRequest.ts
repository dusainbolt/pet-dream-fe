import axios from './axios';

export class AccountRequest {
  static getAccount = async () => {
    return await axios.get('/accounts/my-info');
  };
}
