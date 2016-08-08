// modules import
import controller from './users.controller';
import usersTemplate from './users.template.html';

// users component
const UsersComponent = {
  bindings: {
    users: '<',
  },
  controller,
  template: usersTemplate,
};
export default UsersComponent;
