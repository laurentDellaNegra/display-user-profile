// modules import
import angular from 'angular';

/**
 * Users controller
 */
class UsersController {

  constructor(UsersService, $state) {
    //dependency injection with ngAnnotate
    'ngInject';
    this.usersService = UsersService;
    this.$state = $state;
  }

  refresh() {
    this.usersService.getUsers().then((data) => {
      this.users = data;
    })
  }

  displayProfile(id) {
    this.$state.go('user', {id: id});
  }
}

export default UsersController;
