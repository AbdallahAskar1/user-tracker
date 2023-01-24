// import './App.css'
import { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const username='';
  const age="";
    const [usersList,setUsersList] =  useState([]);

const addUserHandler=(uName,uAge)=>{
 setUsersList((prevUsersList)=>{
  return [...prevUsersList, {name:uName,age:uAge,id:Math.random(0.5).toString()}];
 })
}
  return (
    <div className="App">
      <h1>hello world</h1>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
      
    </div>
  )
}

export default App
