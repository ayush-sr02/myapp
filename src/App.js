import './style.css';
import Header from './Components/header';
import Items from './Components/items';
import Button from './Components/button';
function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <Header/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Button/>
      </div>
    </div>
  );
}

export default App;