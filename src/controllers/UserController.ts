import { Request, Response } from 'express';
import { get, isEmpty } from 'lodash';
import UserServices from '../services/UserServices';

class UserController {
  async getUsers(_req: Request, res: Response) {
    console.log('res : ', res);
    try {
      UserServices.getUsersData()
        .then((users: any[]) => {
          console.log('Returning response to client with user data');
          return res.status(200).json({ status: 'S', data: users });
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      console.log('Error occured while fetching : ', err);
    }
  }

  getUserDetails(req: Request, res: Response) {
    try {
      const userId: any = get(req, 'query.userId', '');

      if (isEmpty(userId)) {
        return res
          .status(400)
          .json({ status: 'E', message: 'user Id required' });
      }

      UserServices.getUserDetails(userId)
        .then((userDetails: object) => {
          console.log('Returning response to client with user data');
          return res.status(200).json({ status: 'S', data: userDetails });
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      console.log('Error occured while fetching : ', err);
    }
  }
}

export default new UserController();
