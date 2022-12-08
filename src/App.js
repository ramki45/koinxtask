import './App.css';
import Card from './Card';
import Main from './Main';
import TopBar from './TopBar';

function App() {
  return (
    <div id="wrapper">
    
      <div id="content-wrapper" className="d-flex flex-column">


        <div id="content">

          <TopBar />
          <div className="container-fluid">
            <Card/>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;