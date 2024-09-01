import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const   Attendance = () =>  {
const [users, setUsers] = useState([])
const[id,setId] = useState("")
const[name,setName] = useState("")
const[email,setEmail] = useState("")
const[add,setAdd] = useState("")
const[college,setCollege] = useState("")
const[branch,setBranch] = useState("")

const fetchData = async () => {

const response = await fetch("http://localhost:3000/posts")
const data = await response.json()
setUsers(data)
}


useEffect(() => {
fetchData()
}, [])


function deleteUser(id) {
fetch(`http://localhost:3000/posts/${id}`, {
method: 'DELETE',
})
.then((result) => result.json())
.then((resp) => console.log(resp));
fetchData()
}

function adduser (e) {
e.preventDefault()
let obj = {id,name,email,add,college,branch}
fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  fetchData()


}


function updateUser(id) {

 let item  = users[id-0]

  setId(item.id)
  setName(item.name)
  setEmail(item.email)
  setAdd(item.add)
  setCollege(item.college)
 setBranch(item.branch)
}
function Update () {
let obj = {id,name,email,add,college,branch}
fetch(`http://localhost:8000/posts/${id}`, {
method: 'PUT',
body: JSON.stringify(obj),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((resp) => console.log(resp,"HJHJHJHJHJ"));
fetchData()
}
return (
<>
<form >
   <br/>
   id &nbsp;<input type="text"  value={id}   onChange={(e)=>setId(e.target.value) }    />&nbsp;
   Name <input type="text"  value={name}   onChange={(e)=>setName(e.target.value)} />
   Email &nbsp; <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} />&nbsp;
   Add &nbsp;<input type="text"  value={add}    onChange={(e)=>setAdd(e.target.value)}/>&nbsp;
   College &nbsp;<input type="text"  value={college}   onChange={(e)=>setCollege(e.target.value)}/>&nbsp;
   Branch &nbsp;<input type="text" value={branch}  onChange={(e)=>setBranch(e.target.value)} />&nbsp;&nbsp;
   <Button variant="primary"  onClick={adduser}> Add  </Button>
   <Button variant="primary"  onClick={Update}> UpdateUser  </Button>
</form>
<br/>
<Table striped bordered hover variant="dark">
   <thead>
      <tr>
         <th>id</th>
         <th> Name</th>
         <th>Email</th>
         <th>Add</th>
         <th>College</th>
         <th>Branch</th>
         <th>Action</th>
         <th>Action</th>
      </tr>
   </thead>
   <tbody>
      {users.map((items, key) => {
      return(
      <tr key={key}>
        <td>{items.id}</td>
         <td>{items.name}</td>
         <td>{items.email}</td>
         <td>{items.add}</td>
         <td>{items.college}</td>
         <td>{items.branch}</td>
         <td><Button variant="success"  onClick={()=>updateUser(items.id)}>Update</Button></td>
         <td><Button variant="danger" onClick={()=>deleteUser(items.id)}>Delete</Button></td>
      </tr>
      )
      })}
   </tbody>
</Table>
</>
)
}
export default Attendance