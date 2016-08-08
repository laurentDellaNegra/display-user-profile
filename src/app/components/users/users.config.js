/**
 * config of the module is an exported function
 * @param  $stateProvider       angular service
 * @param  $urlRouterProvider   angular service
 * @return void
 */
export default function config($stateProvider, $urlRouterProvider) {
  //ngAnnotate
  'ngInject';
  $stateProvider
    .state('users', {
      url: '/users',
      // We load users when we load the page
      template: '<users users="$resolve.usersData"></users>',
      resolve: {
        usersData: UsersService => UsersService.getUsers()
      }
    });
  $urlRouterProvider.otherwise('/');
}
