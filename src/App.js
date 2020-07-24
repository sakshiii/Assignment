import React from 'react';
import Element from './Element';
import Bottom from './Bottom'

const App = ()=> {
  return (
    
<form style={{backgroundColor:"white" , margin:"30px"}}>


<div style={{marginLeft:"180px" , marginBottom:"30px" , marginTop:"30px"}}>
<div><pre class="tab tab tab tab"><strong style={{paddingRight:"70px"}}>From Date:</strong>  <strong>To Date: </strong></pre></div>
<input type="date" value="01/04/2020" style={{marginRight:"10px"}}/>

<input type="date" value="18/06/2020"/>  

</div>
<nav style={{marginLeft:"150px"}}>

    <Element title="Channel" />
    <Element title="BookingId"/>
    <Element title="Customer Name"/>
    <Element title="Booked On"/>
    <Element title="Checkedin"/>
    <Element title="Checkedout"/>
    <Element title="Room"/>
    <Element title="Room Nights"/>
    <Element title="# of Rooms"/>
    <Element title="Price"/>
    <div style={{marginTop:"0px" }}>
    <Bottom title="Booking.com"></Bottom>
    <Bottom title="87654321"/>
    <Bottom title="Arun S"/>
    <Bottom title="10 Jun 06:30AM"/>
    <Bottom title="11 Jun"/>
    <Bottom title="12 Jun"/>
    <Bottom title="Deluxe"/>
    <Bottom title="1"/>
    <Bottom title="2"/>
    <Bottom title="3300.00"/>
    </div>
    <div style={{margin:"20px"}}>Showing 1 to 1 of 1 enteries
    <button  style={{marginLeft:"800px"}}>Previous</button>
    <button style={{backgroundColor:"blue"}}>1</button>
    <button >Next</button>
    </div>
  </nav>
  </form>
  );
};

export default App;
