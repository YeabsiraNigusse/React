import '../App.css'

function Todo(props){

    const handleDel = () =>{
        console.log(props.text)
        console.log('Clicked!')
    }

    return(
        <div className='parent'>
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='btn'>
            <button className='del' onClick={handleDel}>Delete</button>
          </div>
        </div>
    
        </div>
    )
}

export default Todo