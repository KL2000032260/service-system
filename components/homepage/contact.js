import React, { Component } from 'react'

export class contact extends Component {
    render() {
        return (
            <div>
                <h2>Responsive Contact Section</h2>


<div class="container">
  
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
 
  <div class="row">
    
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="india">india</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>

            </div>
        )
    }
}

export default contact

