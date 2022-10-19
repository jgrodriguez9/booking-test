import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import EditBooking from './pages/EditBooking';
import Home from './pages/Home';

function App() {
  return (
      
        <Container className='my-5'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<EditBooking />}/>
          </Routes>                  
        </Container>    
  );
}

export default App;
