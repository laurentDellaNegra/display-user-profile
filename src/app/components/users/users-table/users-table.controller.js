// modules import
import angular from 'angular';

/**
 * Users table controller
 */
class UsersTableController {

  constructor() {
    //ngAnnotate
  'ngInject';
  }

  selectLine(id) {
    this.onDisplayProfile({id: id});
  }
}

export default UsersTableController;
