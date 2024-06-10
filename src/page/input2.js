import { useState } from 'react';

const Pu = () => { const [tx, set] = useState({
    name: '', email:'', phone:''
});  
const { name, email, phone } = tx;
function send(q) {//const value= q.target.value; const id=q.target.id; 
    
    set({...tx, [q.target.id]: q.target.value});}

return ( <div className='Con'><br/>이름 : &nbsp; <input id="name" onChange={send} /><p/>  
 이메일 : &nbsp; <input id="email" onChange={send} /><p/>
 전화번호 : &nbsp; <input id="phone" onChange={send} /><hr/>
 이름: {name}<p/>이메일: {email}<p/>전화번호: {phone}<p/>
  </div>
  )}

export default Pu;

