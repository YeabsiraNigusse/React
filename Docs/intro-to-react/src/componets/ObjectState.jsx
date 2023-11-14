import { useState } from "react";


export default function ObjectState(){
   const initialUser = {
    name: '',
    age:0
   }

   const [user, setUser] = useState(initialUser)

   return (
    
    <>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <input type="text" placeholder="Name" onChange={(e) => setUser({...user, name: e.target.value})}/>
    <input type="number" placeholder="Age" onChange={(e) => setUser({...user, age: e.target.value})}/>
    
    </>
   )

}