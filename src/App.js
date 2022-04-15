//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextCapatilizer from './components/TextCapatilizer';

function App() {
  return (
    <>
      <Navbar title="TextUtils2" contact="Contact me" />
      <div className="container">
        <TextCapatilizer />

      </div>
    </>
  );
}

export default App;
