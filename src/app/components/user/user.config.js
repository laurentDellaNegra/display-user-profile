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
    .state('user', {
      url: '/user/:id',
      // We load users when we load the page
      template: '<user user="$resolve.userData"></user>',
      resolve: {
        userData: (UserService, $stateParams) => UserService.getUser($stateParams.id)
      }
    });
  $urlRouterProvider.otherwise('/');
}
