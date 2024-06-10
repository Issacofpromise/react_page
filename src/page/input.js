import React, { useState } from 'react';

const Pu = () => { const [tx, set] = useState('');
function send(q) {set(q.target.value)};
return ( <div><br/>
  <input onChange={send} /><p/>{tx}</div>)}

export default Pu;