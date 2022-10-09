import './App.css';
import { observer } from 'mobx-react-lite';
import { useStore } from './hooks/useStore';

function App() {
  const { users, boards } = useStore();
  console.log('users', users.toJSON());
  console.log('boards', boards.toJSON());

  return <div>start</div>;
}

export default observer(App);
