// modules import
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UsersComponent from './users.component';
import config from './users.config';
import UsersTableComponent from './users-table';
import UsersService from './users.service';

/**
 * Page Users: router component
 */
const users = angular
  .module('users', [
    uiRouter,
    UsersTableComponent
  ])
  .component('users', UsersComponent)
  .service('UsersService', UsersService)
  .config(config)
  .name;

//export
export default users;
