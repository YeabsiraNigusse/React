import { useState } from "react"
import Model from "./Model"
import Backdrop from "./Backdrop"

function Todo(props){

    const [openModel, setOpenModel] = useState(false)

    const handleDel = () =>{
       setOpenModel(true)
    }
    const closeModalHandler = ()=>{
        setOpenModel(false)
    }

    return(
       <>
       <div className='card'>
          <h2>{props.text}</h2>
          <div className='actions'>
            <button className='btn' onClick={handleDel}>Delete</button>
          </div>
        </div>

        {openModel && <Model onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {openModel && <Backdrop onCancel={closeModalHandler}/>}
       </>
        
       
    )
}

export default Todo