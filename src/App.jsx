import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/NavTabs';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;
