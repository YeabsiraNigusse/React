
function clicked(){
    console.log('you clicked me!')
}

export default function Button(){
    return(
        <button onClick={clicked}>Click me</button>
    )
}