const Tome=({ud})=>{ return(
    <tr>
        <td>{ud.name}</td>
        <td>{ud.age}</td>
    </tr>
)}
function tome2() { 
    const lt=[
        {name:'a',age:1},
        {name:'b',age:2},
        {name:'c',age:3},
        {name:'d',age:4},
        {name:'e',age:5},
    ];
    return ( <><br/><br/><br/> <table><thead><tr className='vir'>
        <td>Name</td><th>Age</th></tr>
    </thead><tbody>
        {lt.map((lst)=>(<Tome ud={lst} key={lst.age}/>
        ))}
    </tbody></table></>
    )}
    export default tome2;