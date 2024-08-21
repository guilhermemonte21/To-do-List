
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import { FaMagnifyingGlass } from "react-icons/fa6"
import SearchBar from './Components/searchBar/searchBar';

function App() {
  const dataAtualExtenso = new Date().toLocaleString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  

  return (
     


    <div className="screen">
      <div className='view'>
      <h1>{dataAtualExtenso}</h1>
     <SearchBar icon={FaMagnifyingGlass}/>
    
    <div className='inputs'>
    
    <Input/>
    <Input/>
    </div>
    
    </div>
    <Button/>
    </div>
    
  );
}
export default App;
