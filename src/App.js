import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './pages/Footer';
import Header from './pages/Header';
import UserListComponent from './components/UserListComponent';
import Index from './pages/Index';
import Home from './pages/Home';
import Search from './pages/Search';
import Contact from './pages/Contact';
import AddUserComponent from './components/AddUserComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/add-user' element={<AddUserComponent />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/users' element={<UserListComponent />} />
          <Route path='/edit/:userId' element={<AddUserComponent />} exact ></Route>
          <Route path='/delete/:userId' element={<UserListComponent />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
