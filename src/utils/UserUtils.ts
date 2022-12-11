class UserUtils {
  getUsersRequest() {
    return {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    };
  }

  getUserDetailsRequest(userId: string) {
    return {
      url: `https://jsonplaceholder.typicode.com/users/${userId}`,
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    };
  }
}

export default new UserUtils();
