import logo from './logo.svg';
import './App.css';
import { Header, Main, TaskItem, AddTaskBtn } from "./components";

function App() {
  return (
    <div className="App p-12 mx-auto h-screen box-border">
      <div className='GlobalContainer bg-blue-100 h-4/5 rounded-lg shadow-sm'>
        <Header />
        <Main />
        
      </div>
    </div>
  );
}

export default App;
