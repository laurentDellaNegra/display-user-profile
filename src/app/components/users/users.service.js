/**
 * User service
 */
class UsersService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getUsers() {
    // return this.$http.get('./users.json').then((data) => {
    return this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
      //success
      return data.data;
    },(reason) => {
      //error
      console.log(reason);
    });
  }
}

//export
export default UsersService;
