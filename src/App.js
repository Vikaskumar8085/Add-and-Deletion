import React from "react";
class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:[{roll:"101",  Name:"Vikas", City:"Indore"},
        {roll:"102",  Name:"Vinay", City:"Indore" },
        {roll:"103",  Name:"vicky", City:"Indore"}  ]}
  }
savebox=()=>{
  var roll=this.rollbox.value
  var Name=this.Namebox.value
   var City=this.citybox.value

  var obj={roll,Name,City}
  console.log(obj)
this.setState({data:[...this.state.data,obj]})
this.rollbox.value=""
this.Namebox.value=""
this.citybox.value=""

}


delete=(e)=>{
  var roll=e.target.value
this.setState({data:this.state.data.filter(obj=>obj.roll !== roll)})


}
  render(){
    return(
      <>

<h3>ToDo List</h3>
      <div id="fomrbox">
    <form>
          <div id="marg">
            <input type="text" required ref={c=>this.rollbox=c}  placeholder="roll" />
          </div>
          <div id="marg">
            <input type="text" required ref={c=>this.Namebox=c}  placeholder="Name"  />
          </div>
          <div id="marg">
            <input type="text" required ref={c=>this.citybox=c}  placeholder="city"  />
          </div>
          <div id="marg">
            <button onClick={this.savebox}>submit</button>
          </div>
          </form>
            </div>
      
      <div id="box">
      <div id="insideBox">
          <table className="table table-striped table-dark tablo-hover">
            <thead>
              <tr> <th>ID</th>
              <th>roll</th>
              <th>Name</th>
              <th>City</th>
              <th>Del</th></tr>
            </thead>
            <tbody>
{
  this.state.data.map( (info,index)=>{
    return <tr>
      <td key={index}>{index+1}</td>
      <td>{info.roll}</td>
      <td>{info.Name}</td>
      <td>{info.City}</td>
      <td><button value={info.roll} onClick={this.delete}>del</button></td>
          </tr>
  })
}

            </tbody>
          </table>
        </div>
      </div>
      </>
    )
  }
}
export default App;