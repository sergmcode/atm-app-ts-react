import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppContent from './components/AppContent/AppContent';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
    </div>
  );
}

export default App;
