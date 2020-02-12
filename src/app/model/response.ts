import {User} from './user';
import {Post} from './post';

export class Response {
  id: any;
  content: string;
  user?: User;
  date?: string;
  post?: Post;



  constructor() {
  }



}
