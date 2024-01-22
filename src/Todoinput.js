import React, {useState} from 'react';
import Button from '@mui/material/Button';
 
function Todoinput(props) {
        const [inputText,setInputText] = useState('');
      
        
  return (
    <div className='input-container'>
      <input type='text' placeholder='Add an item' className='input-todo'  value={inputText} onChange={e=>{
            setInputText(e.target.value)
        }}></input>
      <Button variant="contained"  onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}> + </Button>
    </div>
  );
}

export default Todoinput;
