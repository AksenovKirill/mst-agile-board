import { types, flow } from 'mobx-state-tree';
import ApiCall from '../api/index';

const User = types.model(
  'User,' <
    {
      id: types.identifier,
      createdAt: types.Date,
      name: types.string,
      avatar: types.string,
    }
);

const ActiveUser = User.named('ActiveUser');

export const UsersStore = types
  .model('UsersStore', {
    users: types.maybe(types.array(User)),
    me: types.maybe(ActiveUser),
  })
  .actions((self) => ({
    load: flow(function* () {
      self.users = yield ApiCall.get('users');
      self.me = yield ApiCall.get('me');
    }),
    afterCreate() {
      self.load();
    },
  }));
