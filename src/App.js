import logo from './logo.svg';
import './App.css';

import data from './database.json'
import Gear from './Components/Gear';

// Code adapted from https://www.makeuseof.com/react-generate-table-from-json/

function App() {

  const getHeadings = () => {
    return Object.keys(data[0]);
  }

  return (
    <div className="App">
      <Gear theadData={getHeadings()} tbodyData={data}/>
    </div>
  );
}

export default App;
