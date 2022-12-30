import { useRef } from 'react';

const Additems = ({newTask, setNewtask, handleSubmit}) => {
  const inputRef=useRef();
  return (
    <form className='addtolist'  onSubmit={handleSubmit} >
        {/* <label htmlFor='addItem'>Add to the list</label> */}
        <input autoFocus ref={inputRef} id='addItem' type='text' placeholder='Add a New Goal'  required value={newTask} onChange={(e)=>setNewtask(e.target.value)}/>
        <button type='submit' onClick={()=> inputRef.current.focus()}>ADD</button>
    </form>
  )
}

export default Additems