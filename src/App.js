import Main from './Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';
import RequireAuth from './requireAuth/RequireAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route element={<RequireAuth/>}>
          <Route path="/" element={<Main/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
