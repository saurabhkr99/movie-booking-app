import { Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieBookingPage from './Pages/MovieBookingPage';
import MoviesPage from './Pages/MoviesPage';

function App() {

  return (
    <BrowserRouter>
      <Link to="/">
        <Card className='sticky-nav'>
          <h1 className='text-center m-2'>
            Movie World
          </h1>
        </Card>
      </Link>
      <Routes>
        <Route exact path='/' element={<MoviesPage />} />
        <Route exact path='/bookmovie/:id' element={<MovieBookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
