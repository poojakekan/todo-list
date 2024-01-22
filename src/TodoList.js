import React from 'react';
import { Delete} from "@mui/icons-material"

const TodoList = (props) => {
  return (
    <div>
      <li className='list-item'>
        {props.item}
        <span className='icon'>
             <Delete style={{color:"red", float:"right"}}  onClick={e=>{
            props.deleteItem(props.index)
        }}/>
     
     </span>
      </li>
    </div>
  );
}

export default TodoList;
