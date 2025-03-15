import { useState } from "react";
import "./User.css"
interface Users {
   id: number;
   name: string;
   email: string;
   password: string;
}

function UserForm() {
const [user, setUser]= useState<Users>({ id: 0 , name:"", email:"", password:""});
const [userlist, setUserList]= useState<Users[]>([]);
const [mistake,setMistake] = useState<string>("");
const [successMessage, setSuccessMessage] = useState<string>("");
// const [deleteUser, setDeleteUser] = useState<string>("")


const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
setUser({
    ...user,
    [e.target.name]: e.target.value
});};

const handleSubmit = (e: React.FormEvent) =>{
 e.preventDefault();
if(user.name.length < 3){
    setMistake("isim gecersiz");
    setSuccessMessage("");
    return;
    }
if(!user.email.includes("@")){
    setMistake("email gecersiz");
    setSuccessMessage("");
return;
}
if(user.password.length < 6){
    setMistake("parola gecersiz");
    setSuccessMessage("");
    return;
}    

   setUserList([...userlist, {...user, id:Date.now()}])
   setSuccessMessage("elave edildi"); 
   setUser({id: 0 , name:"", email:"", password:""})
   setMistake("")
}

const handleDelete = (id:number) =>{
    const updatedUserList = userlist.filter(user => user.id !==id);
    setUserList(updatedUserList);
    setSuccessMessage("silindi")
}

return (
<div className="bullshit">

  <ol>
{userlist.map((users) => (
  <li key={users.id}>
{users.name} - {users.email}
<button onClick={() => handleDelete(users.id)}>Sil</button>
  </li>
))}
  </ol>
<input type="text" name="name" value={user.name} onChange={handleChange} placeholder="İsim"/>
<input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
<input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Parola"/>
<button onClick={handleSubmit}>Gönder</button>
{mistake && <p style={{ color: "red" }}>{mistake}</p>}
{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
</div>
  );
}export default UserForm;