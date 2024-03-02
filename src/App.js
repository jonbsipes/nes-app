import './App.css';
import Navigation from './components/navigation/navigation.component';
import Home from './components/home/home.component';
import ListBox from './components/list/list-box-component';
import { Routes, Route } from 'react-router-dom';
import PlateDisplay from './components/plate-display/plate-display-component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='cus' />
        <Route path='ref' />
        <Route path='OVERHEAD PLATE BOOK' element={<PlateDisplay />}/>

      </Route>
    </Routes>
     
  );
}

export default App;
