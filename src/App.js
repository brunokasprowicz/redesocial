import './App.css';
import PrimarySearchAppBar from './components/Appbar'
import Friends from './components/Friends'
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <div className='mainBody'> 
        <Friends/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
