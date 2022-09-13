import React from 'react';  
class Read extends React.Component {  
 constructor() {  
      super();  
      this.state = { checked:false}; 
      this.Change_State =this.Change_State.bind(this);


 }
 Change_State(){this.setState({checked:!this.state.checked})}

render() {  

   
        return ( 
<div> 
{
  this.state.checked ? (<div>We are proud of what Albatros achieved in its trail from the beginning till now which is vey clear in the revenue and
 the rewards we have gained. The company has achieved many awards, including the Sudanese Award for Information Technology 
 Communication, 2017, As in the previous year our company was awarded in appreciation of achieving second highest growth in
  2020 monthly VAS revenue from Sudani Telecom.
  <div className=" reveal fade-bottom  row img_row_ser text-center ">


<div className="reveal fade-bottom col-sm-12 col-md-6 col-lg-3 ">
<img className="img-fluid imagesize imagesize2 myDIV " src="./sudaniaward.jpg" alt="sudani"  /> 
</div>

<div className="reveal fade-bottom col-sm-12 col-md-6 col-lg-3 ">
<img className="img-fluid imagesize imagesize2 myDIV" src="./itaward.jpg" alt="itaward" /> 
</div>


</div>
  <input type="button" onClick={this.Change_State} value="Read Less"  /></div>):
  (<input type="button" onClick={this.Change_State} value="Read More ..."  />)

}
 </div>

               );  
        }  
                                  }

  
  export default Read;