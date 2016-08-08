// modules import
import angular from 'angular';
import UsersTableComponent from './users-table.component';
import uiRouter from 'angular-ui-router';

// Users table nested component
const usersTable = angular
  .module('users.table', [uiRouter])
  .component('usersTable', UsersTableComponent)
  .name;

// export
export default usersTable;
