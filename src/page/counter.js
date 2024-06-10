import React,{useState} from 'react';

function Jt() { const [ct,st] = useState(0);
    function ic() { st(ct + 1); }
    const dc=()=>{ st(ct - 1); }
return ( <div><br/>
    <button onClick={ic}>+1</button>
    <button onClick={dc}>-1</button>
    <p>{ct}</p>
    </div>
)}
export default Jt;