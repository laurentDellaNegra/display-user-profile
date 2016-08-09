/**
 * User service
 */
class UserService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getUser(id) {
    return this.$http.get('https://jsonplaceholder.typicode.com/users/' + id).then((data) => {
      //success
      return data.data;
    },(reason) => {
      //error
      console.log(reason);
    });
  }
}

//export
export default UserService;
