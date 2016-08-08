// modules import
import controller from './user.controller';
import userTemplate from './user.template.html';

// users component
const UserComponent = {
  bindings: {
    user: '<',
  },
  controller,
  template: userTemplate,
};
export default UserComponent;
