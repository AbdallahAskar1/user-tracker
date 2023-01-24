import Card from "../UI/Card";
import styles from './UserList.module.css'
const UserList = props =>{
    return (
        <Card className={styles.users}>

        <ul>
          {props.users.map(({id,name,age})=>{
           return( <li key={id}>{name} ({age}) years old </li>)
          })}
        </ul>
        </Card>
    )
}
export default UserList;
