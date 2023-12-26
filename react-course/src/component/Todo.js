import '../App.css'

function Todo(props){
    return(
        <div className='parent'>
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='btn'>
            <button className='del'>Delete</button>
          </div>
        </div>
    
        </div>
    )
}

export default Todo