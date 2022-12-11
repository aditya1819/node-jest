import express, { Request, Response } from 'express';
import UserController from '../controllers/UserController';

const UserRoutes = express.Router();

UserRoutes.get('/user', (req: Request, res: Response) => {
  UserController.getUserDetails(req, res);
});

UserRoutes.get('/users', (req: Request, res: Response) => {
  UserController.getUsers(req, res);
});

export default UserRoutes;
