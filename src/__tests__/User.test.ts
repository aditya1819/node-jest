import UserController from '../controllers/UserController';
import UserUtils from '../utils/UserUtils';
import UserServices from '../services/UserServices';
import express, { Request, Response } from 'express';
import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';

describe('Get Users', () => {
  it('should return status 200', async () => {
    const mock = new MockAdapter(axios);

    const mockRes = [
      [
        {
          address: {
            city: 'Gwenborough',
            geo: { lat: '-37.3159', lng: '81.1496' },
            street: 'Kulas Light',
            suite: 'Apt. 556',
            zipcode: '92998-3874'
          },
          company: {
            bs: 'harness real-time e-markets',
            catchPhrase: 'Multi-layered client-server neural-net',
            name: 'Romaguera-Crona'
          },
          email: 'Sincere@april.biz',
          id: 1,
          name: 'Leanne Graham',
          phone: '1-770-736-8031 x56442',
          username: 'Bret',
          website: 'hildegard.org'
        }
      ]
    ];

    // const mReq: Partial<Request> = {};
    // const mRes: Partial<Response> = {};

    mock
      .onGet('https://jsonplaceholder.typicode.com/users')
      .replyOnce(200, mockRes);

    const result: any = await UserServices.getUsersData();

    expect(result).toEqual(mockRes);
  });
});
