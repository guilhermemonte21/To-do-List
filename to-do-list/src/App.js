
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import { FaMagnifyingGlass } from "react-icons/fa6"
import SearchBar from './Components/searchBar/searchBar';
import Modal from './Components/Modal/Modal';
import { useState } from 'react';

function App() {
  const dataAtualExtenso = new Date().toLocaleString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const [showModal, setShowModal] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);
    const [todos, setTodos] = useState([
        'Task 1',
        'Task 2',
        'Task 3'
    ]);
    const [filter, setFilter] = useState('');
    const handleChange = (event) => {
        setFilter(event.target.value);
      };
      
      const filteredWords = todos.filter(todos =>
        todos.toLowerCase().includes(filter.toLowerCase())
      );

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        closeModal();
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const editTodo = (index, newText) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? newText : todo
        );
        setTodos(updatedTodos);
    };

  

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
    <Button onClick={() => setShowModal(true)}/>
    


</div>
  );
}
export default App;
