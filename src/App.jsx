import logo from './logo.svg';
import './App.scss';
import "@fontsource/roboto";
import Header from './components/header/Header';
import Leftmenu from './components/leftmenu/Leftmenu';
import ContentArea from './components/contentarea/ContentArea';
function App() {
  return (
    <div className="App">
      <Leftmenu />
      <Header />
      <ContentArea/>
    </div>
  );
}

export default App;
