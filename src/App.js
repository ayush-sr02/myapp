import './style.css';
import Header from './Components/header';
import Items from './Components/items';
import Button from './Components/button';
import HookComponent from './Components/hook';
function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <HookComponent/>
        <Header title="TODO from Props"/>
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