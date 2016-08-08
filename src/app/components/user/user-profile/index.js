// modules import
import angular from 'angular';
import UserProfileComponent from './user-profile.component';

// Users table nested component
const userProfile = angular
  .module('user.profile', [])
  .component('userProfile', UserProfileComponent)
  .name;

// export
export default userProfile;
