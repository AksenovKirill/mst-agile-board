import { types, flow } from "mobx-state-tree";
import { ApiCall } from "../api/index";
const User = types.model(
  "User," <
    {
      id: types.identifier,
      createdAt: types.Date,
      name: types.string,
      avatar: types.string,
    }
);
export const UsersStore = types
  .model("UsersStore", {
    users: types.maybe(types.array(User)),
  })
  .actions((self) => ({
    load: flow(function* () {
      self.users = yield ApiCall.get("users");
    }),
    afterCreate() {
      self.load();
    },
  }));
