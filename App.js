
import './App.css';
import Header from './header';
import Additems from './Additems';
import Searchitems from './Searchitems';
import Content from './content';
import Footer from './footer';
import { useState, useEffect } from 'react';
 
function App() {
  const API_URL='http://localhost:3500/items';
  const [newTask, setNewtask] = useState('');
  const [search,setsearch]=useState('')
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
 
  useEffect(()=> {
   
  })
 
  function additem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const NewItem = { id, work: item, checked: false };
    const newlist = [...items, NewItem];
    setitems(newlist);
    localStorage.setItem('todolist', JSON.stringify(newlist));
  }
  function handlechange(id) {
    const newlist = items.map((item => item.id === id ? { ...item, checked: !item.checked } : item))
    setitems(newlist);
    localStorage.setItem('todolist', JSON.stringify(newlist));
  }
 
  function handledelete(id) {
    const newlist = items.filter((item) => item.id != id)
    setitems(newlist);
    localStorage.setItem('todolist', JSON.stringify(newlist));
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    if (!newTask) return;
    additem(newTask);
    setNewtask('');
 
  }
 
  return (
    <div className="App">
      <Header />
      <Searchitems search={search} setsearch={setsearch} />
      <Additems newTask={newTask} setNewtask={setNewtask} handleSubmit={handleSubmit} />
      <Content items={items.filter((item)=> ((item.work).toLowerCase()).includes(search.toLowerCase()))} setitems={setitems} handlechange={handlechange} handledelete={handledelete} />
      <Footer length={items.length} />
    </div>
  );
}
 
export default App;
