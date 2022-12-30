
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, setitems, handlechange, handledelete }) => {

  return (
    <main>
      {(items.length) ? (
        <ul>

          {items.map((item) => (
            <li className="item" key={item.id}>
              <input type="checkbox" onChange={() => handlechange(item.id)} checked={item.checked} />
              <label>{item.work}</label>
              <FaTrashAlt role="button" tabIndex='0' onClick={() => handledelete(item.id)} />
            </li>
          ))}

        </ul>
      ) : (
        <p>hooray no pending work!!</p>
      )}
    </main>
  )
}

export default Content