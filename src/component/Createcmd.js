import React, {Component } from "react";

class Createcmd extends Component{
    state={cmd:''};
    
    addpost=(e)=>{
        e.preventDefault();
        this.props.add(this.state);
        this.setState({cmd:'',count:'250'})
    }

    render(){
        return(
            <div >
                <form className="createcontainer" onSubmit={this.addpost}  >
                    <div>
                        <textarea rows='5' cols='50' placeholder="Type your comments" maxLength='250' value={this.state.cmd} onChange={(e)=> this.setState({cmd:e.target.value})}></textarea>
                    </div>
                    <div>
                        <button className="postbut" disabled={(this.state.cmd?false:true)} style={{backgroundColor:(this.state.cmd?'#0000ff8f':'skyblue')}}><span className="material-icons icons">send</span></button>
                    </div>
                    
                </form>
                <p style={{marginLeft:455, color:'skyblue'}}>{250-this.state.cmd.length}</p>
            </div>

        )
    }
}

export default Createcmd;