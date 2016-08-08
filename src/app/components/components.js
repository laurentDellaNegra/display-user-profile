// modules import
import angular from 'angular';
import User from './user';
import Users from './users';

// Build the components module
const components = angular
  .module('app.components', [
    User,
    Users,
  ])
  .name;

// export
export default components;
