import React, { Component } from 'react';
import $ from 'jquery';
import "../../Calendar.css";
class MyCalendar extends Component {
  
  componentDidMount(){
  
      var d = new Date(),
      month = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December" ];
      
      $('h1.month').text(month[d.getMonth()]);
      $('p.day').text(d.getDate());
    
      console.log(d);
    
   
    
  }

  
 
  render() {
    return (
      <div class="calendar">
	<h1 class="month"></h1>
	<p class="day"></p>
</div>
    );
  }
}export default MyCalendar;