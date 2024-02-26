import './App.css';
import Navigation from './components/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path='cus' />
        <Route path='ref' />

      </Route>
    </Routes>
     
  );
}

export default App;
