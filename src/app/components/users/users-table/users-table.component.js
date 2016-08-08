// modules import
import controller from './users-table.controller';
import usersTableTemplate from './users-table.template.html';

// calculator component
const UsersTableComponent = {
  bindings: {
    users: '<',
    onDisplayProfile: '&',
  },
  controller,
  template: usersTableTemplate,
};
export default UsersTableComponent;
