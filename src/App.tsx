import './App.css';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
    </div>
  );
}

export default App;
