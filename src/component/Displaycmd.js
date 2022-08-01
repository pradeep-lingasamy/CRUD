const Displaycmd=(props)=>{
    let t='';
    let a=props.cmd.map((x)=> {
        if(!x.sts){
            return(
                <div className="singlecmd" key={x.id}>
                    <div className="title" >
                        <span className="material-icons"> account_circle</span>
                        <b>Anonymous User </b><small>&nbsp; @Anonymous</small>
                    </div>
                    <p>{x.cmd}</p>  
                    <div className="cmdfield">
                        <div>
                            <span className="material-icons icone" onClick={()=>props.editcont(x.id)}>edit</span>
                            <span className="material-icons icond" onClick={()=>props.remove(x.id)}>delete</span>
                        </div>
                        <div>
                            <span className="material-icons iconc">comment</span>
                            <span className="material-icons iconl">favorite_border</span>
                            <span className="material-icons iconf">forward_to_inbox</span>
                        </div>
                        <small>{x.date}</small>
                    </div>
                </div>)
        }
        else{
            t=x.cmd;
            let temp=x.cmd;
            return(
                <div className="editcontainer" key={x.id}>
                    <div>
                        <textarea className="editfield" onChange={(e)=>t=e.target.value} defaultValue={x.cmd}></textarea>
                    </div>
                    <div>
                        <button className="savebut" onClick={()=>props.update(t)}>Save</button><br/>
                        <button className="cancelbut" onClick={()=>props.update(temp)}>Cancel</button>
                    </div>
                </div>)
        }
    })         
    

    return(
        <div>
            {a}
        </div>
    )
}

export default Displaycmd;