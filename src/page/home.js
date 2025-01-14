import {useState} from 'react';

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
        <h2>{pro.tt}</h2>
        {pro.bd}</article>
        }
  function Create(pro){
    return <article>
      <h2>Create</h2>
      <form onSubmit={ev=>{
        ev.preventDefault();
        const tle =ev.target.title.value;
        const dy =ev.target.body.value;
        if(ev.target.title.value==''){
            alert('No Title. Put in to write.');
        return false;}
        pro.aa(tle, dy);
      }}>
        <input name='title'placeholder='Title'></input>
        <p><textarea name='body'></textarea></p>
        <input type='submit'value='SUBMIT.'></input>
      </form>
    </article>}
  function Update(pro){
    const [title, setTi]=useState(pro.title);
    const[body,setbo]=useState(pro.body);
    return <article>
      <h2>Update</h2>
      <form onSubmit={ev=>{
        ev.preventDefault();
        const title =ev.target.title.value;
        const body =ev.target.body.value;
        if(ev.target.title.value=='')
        {alert('No Title. Put in to write.');
        return false;}
        pro.onup(title, body);
      }}>
        <p><input name='title'value={title}
        placeholder='Title'onChange={ev=>{
          console.log(ev.target.value);
          setTi(ev.target.value);
          }}></input></p>
        <p><textarea name='body'value={body}
        placeholder='Body'onChange={ev=>{
          setbo(ev.target.value);
        }}></textarea></p>
        <input type='submit'value='Update.'></input>
      </form>
    </article>
  }
  function App() {
  const [mode, set]=useState('WELCOME');
  const [id, setId]=useState(null);
  const [neid,setneid]=useState(2);
  const [tsp, setTsp]=useState([
    {id:1, title:'Java', body:'Java is...'}
  ]);
  let ctxc=null;
  let ctt = null;
  if(mode==='WELCOME'){
    ctt=<Article tt='Welcome'bd='Hello, WEB'/>
    ctxc=<p><li><a href='create'onClick={ev=>{ev.preventDefault();
        set('CREATE')}}>Create</a></li></p>
  } else if(mode==='READ'){
    let title, body = null;
    for(let i=0; i<tsp.length; i++){
      if(tsp[i].id === id){
        title=tsp[i].title;
        body=tsp[i].body;}}
    ctt=<Article tt={title} bd={body}></Article>
    ctxc=<ul><li><a href='create'onClick={ev=>{ev.preventDefault();
        set('CREATE')}}>Create</a></li>    
    <li><a href={'Update'+id} onClick={ev=>{
      ev.preventDefault();
      set('UPDATE');
    }}>Update</a></li>
    <li><input type='button' value='Delete'
    onClick={()=>{
      const newTsp =[]
      for(let i=0; i<tsp.length; i++){
        if(tsp[i].id !== id){ newTsp.push(tsp[i])}}
      setTsp(newTsp);
      set('WELCOME');
    }}/></li></ul>
   } else if(mode==='CREATE'){
    ctt=<Create aa={(ti, bo)=>{
      const newTsp = {id:neid, title:ti, body:bo}
      const newTsps = [...tsp]
      newTsps.push(newTsp);
      setTsp(newTsps);
      set('READ');
      setId(neid);
      setneid(neid+1);
    }}></Create>
  } else if(mode==='UPDATE'){
    let title, body = null;
    for(let i=0; i<tsp.length; i++){
      if(tsp[i].id === id){
        title=tsp[i].title;
        body=tsp[i].body;}}
    ctt=<Update title={title} body={body}
    onup={(title, body)=>{console.log(title,body);
      const newTsp=[...tsp]
      const updattsp={id:id, title:title, body:body}
      for(let i=0; i<newTsp.length; i++){
        if(newTsp[i].id===id){
          newTsp[i]=updattsp;
          break;}}
      setTsp(newTsp);
      set('READ');
  }}/>}
  return (<div>
  <Header title='Message Board'onChangeMode={()=>{set('WELCOME')}}/>
    <Nav tsp={tsp} onChangeMode={(id)=>{
      set('READ');
      setId(id);
  }}></Nav>
{ctt} {ctxc} </div> );
}
  export default App;
