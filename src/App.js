import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tost from '../src/component/Tost'

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Tost></Tost>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

    </div>
  );
}

export default App;
