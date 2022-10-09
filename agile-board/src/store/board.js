import { types, flow } from 'mobx-state-tree';
import ApiCall from '../api';

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  description: types.string,
  assignee: types.string,
});
const BoardSection = types.model('BoardSection', {
  id: types.identifier,
  title: types.string,
  tasks: types.array(Task),
});
const Board = types.model('Board', {
  id: types.identifier,
  title: types.string,
  sections: types.array(BoardSection),
});
export const BoardStore = types
  .model('BoardStore', {
    boards: types.array(Board),
    active: types.safeReference(Board), //?reference может быть undefined а safe нет
  })
  .actions((self) => {
    return {
      load: flow(function* () {
        self.boards = yield ApiCall.get('boards');
      }),
      afterCreate() {
        self.load();
      },
    };
  });
