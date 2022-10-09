import './App.css';
import { observer } from 'mobx-react-lite';
import { Dashboard } from './components/dashboards';

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default observer(App);
