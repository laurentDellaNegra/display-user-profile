// modules import
import controller from './user-profile.controller';
import userProfileTemplate from './user-profile.template.html';

// calculator component
const UserProfileComponent = {
  bindings: {
    user: '<',
  },
  controller,
  template: userProfileTemplate,
};
export default UserProfileComponent;
