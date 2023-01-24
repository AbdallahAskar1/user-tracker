import React,{useState} from "react"; 
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css';
const AddUser = props=>{

    const [username,setUsername]=useState('');
    const [age,setAge]=useState('');
    const [error,setError]=useState()

    const usernameChangeHandler=(event)=>{

        setUsername(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setAge(event.target.value);
    }

       

    const addUserHandler=(event)=>{
     event.preventDefault();
     if (username.trim().length===0 || +age.trim() <=0){
        setError({title:"an error occured",message:"please enter a valid username or age"})
        return;
     }
       props.onAddUser(username,age);
        console.log(username,age);
        setAge('');
        setUsername('');
    };
    
    return(
        <div>
        {error && <ErrorModal title={error.title} message={''}/>}
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username </label>
        <input id='username' type='text' value={username} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id='age' type='text' value={age} onChange={ageChangeHandler} />
       <Button type="submit">Add User</Button>
    </form>
    </Card>
        </div>
    
    );
};
export default AddUser;