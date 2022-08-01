import Createcmd from "./component/Createcmd";
import React, {useState} from "react";
import Displaycmd from "./component/Displaycmd";
import uuid from 'react-uuid'

function App() {
  let [cmd, setCmd]=useState([]);
  
  const add=(a)=>{
    let month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let date=new Date();
    let min= date.getMinutes();
    min= min<10? '0'+min : min; 
    let d= month[date.getMonth()-1] + ' ' + date.getDate() + ','+ ' ' +date.getFullYear()+ ' '+  date.getHours() +':'+ min ;
    d+=(date.getHours() <12) ? ' am':' pm'
    setCmd([...cmd, { id:uuid(), cmd: a.cmd, date:d, sts:false }])
  }

  const remove=(id)=>{
    let a=[];
    a=cmd.filter((x)=> x.id!=id)
    setCmd(a)
  }

  const edit=(id)=>{
    let a=[];
    a=cmd.map((x)=> {
      if(x.id==id){
        x.sts=true;
      }
      return x
    })
    setCmd(a)
  }

  const update=(txt)=>{
    let a=[];
    a=cmd.map((x)=> {
      if(x.sts){
        x.sts=false;
        x.cmd=txt
      }
      return x
    })
    setCmd(a)
  }

  return (
    <div className="App">
      <div className="container">
        <Createcmd add={add}/>
        <Displaycmd cmd={cmd} remove={remove} editcont={edit} update={update}/>
      </div>
    </div>
  );
}

export default App;
