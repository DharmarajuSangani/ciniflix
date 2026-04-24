import './App.css';
import './index.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import AllRouters from './routers/AllRouters';

function App() {
  return (
    <div className="dark:bg-darkbg">
      <Header />
      <AllRouters />
      <Footer />
    </div>
  );
}

export default App;
