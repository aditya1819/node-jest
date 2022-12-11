import UserUtils from '../utils/UserUtils';
import axios from 'axios';
import { get, sortBy } from 'lodash';

class UserServices {
  async getUsersData() {
    let users: any[] = [];
    await axios(UserUtils.getUsersRequest())
      .then((response) => {
        users = get(response, 'data', []);
        console.log(`Fetch ${users.length} users data from JSON placeholders`);
      })
      .catch((err) => {
        throw err;
      });
    return sortBy(users, ['name', 'id']);
  }

  async getUserDetails(userId: string) {
    let userDetails: object = {};
    await axios(UserUtils.getUserDetailsRequest(userId))
      .then((response) => {
        userDetails = get(response, 'data', {});
        console.log(`Fetched details for userId: ${userId}`);
      })
      .catch((err) => {
        throw err;
      });
    return userDetails;
  }
}

export default new UserServices();
