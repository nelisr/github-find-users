import { BaseModel } from './base';

export class User extends BaseModel {
  constructor(
    public id: number,
    public login: string,
    public name: string,
    public email: string,
    public avatar: string,
    public url: string,
  ) {
    super(id);
  }
}
