import Button from "./componets/button";
import {user} from './componets/data'
import List from "./componets/list";
import State from "./componets/BasicState1";
import ObjectState from "./componets/ObjectState";
import './App.css'
import ArrayState from "./componets/ArrayState";

export default function App(){
  const name = 'yeab'

  let content;
  if (name){
    content = <h5>Hello {name}</h5>
  }else{
    content = <h5>Hello World</h5>
  }
     
  return(
    <>
    <h1>This is my first Nested Component</h1>
    <Button/>

    <h2>Let us dispaly a data</h2>
    <h3>{user.name}</h3>

    <img src={user.imgUrl} alt="Photo" className="avater" style={{
      width:user.imageSize,
      height:user.imageSize
    }}
    />
    <h4>The world of conditionals</h4>
    {content}
    <h4>This is my list</h4>
    <List/>

    <h4>Let us talk about States</h4>
    <p>This is basic state management</p>
    <State/>
    <p>This is object state management</p>
    <ObjectState/>
    <p>This is Array state management</p>
     <ArrayState/>
    </>
  )
}