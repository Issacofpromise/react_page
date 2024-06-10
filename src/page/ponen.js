const Ab=()=>{
function Header(pro){
    return <h1><a href='/'onClick={(ev)=>{
        ev.preventDefault();     
      pro.onChangeMode();
    }}>{pro.title}</a></h1>
  }
  function Nav(pro){ 
    const ack=[]
    for(let i=0; i<pro.tsp.length; i++){
      let s=pro.tsp[i];
      ack.push(<li key={s.id}>
      <a id={s.id} href={'/read/'+s.id}onClick={ev=>{
        ev.preventDefault();
        pro.onChangeMode(Number(ev.target.id)); 
      }}>{s.title}</a></li>)}
    return <ol type='I'>
      {ack}
    </ol>
    }
    function Article(pro){
      return <article>
        <h2>{pro.title}</h2>
        {pro.body}</article>
        }}
        export default Ab; 