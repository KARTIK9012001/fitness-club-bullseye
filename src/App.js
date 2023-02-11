import React,{useState, useEffect} from 'react'
import { View } from './components/View';


const getDatafromLS=()=>{
  const data = localStorage.getItem('members');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  
  const [members, setmembers]=useState(getDatafromLS());

  
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [phone_number, setPhone_Number]=useState('');
  const [address, setAddress]=useState('');

  // form submit event
  const handleAddMemberSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let member={
      name,
      email,
      phone_number,
      address
    }
    setmembers([...members,member]);
    setName('');
    setEmail('');
    setPhone_Number('');
    setAddress('');
  }

  
  const deleteMember=(phone_number)=>{
    const filteredMembers=members.filter((element,index)=>{
      return element.phone_number !== phone_number
    })
    setmembers(filteredMembers);
  }

  
  useEffect(()=>{
    localStorage.setItem('members',JSON.stringify(members));
  },[members])

  return (
    <div className='wrapper'>
      <h1>Fitness Club Registration</h1>
      
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddMemberSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Email</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label>Phone Number</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPhone_Number(e.target.value)} value={phone_number}></input>
            <br></br>
            <label>Address</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAddress(e.target.value)} value={address}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              Add Member
            </button>
          </form>
        </div>

        <div className='view-container'>
          {members.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Phone_Number</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View members={members} deleteMember={deleteMember}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setmembers([])}>Remove All</button>
          </>}
          {members.length < 1 && <div>Members List</div>}
        </div>

      </div>
    </div>
  )
}

export default App
