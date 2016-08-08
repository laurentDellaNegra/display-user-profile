// modules import
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserComponent from './user.component';
import config from './user.config';
import UserService from './user.service';
import UserProfileComponent from './user-profile';

/**
 * Page Users: router component
 */
const user = angular
  .module('user', [
    uiRouter,
    UserProfileComponent
  ])
  .component('user', UserComponent)
  .service('UserService', UserService)
  .config(config)
  .name;

//export
export default user;
