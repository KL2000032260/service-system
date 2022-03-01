import React from 'react'
import { Link } from "react-router-dom";


function Services() {
    return (
       
           <div class="main">

<h1>our services</h1>
<h2>PORTFOLIO</h2>

<div class="row">
  <div class="column">
    <div class="content">
    <div className="qwe">
<Link to="/sift1"> <img src="https://img.freepik.com/free-photo/businessman-pointing-arrow-graph-corporate-future-growth-plan-increase-percentage_20693-179.jpg?size=338&ext=jpg" alt="business" /></Link>
</div>
      <h3>Business service</h3>
      <p> Business services is a general term that describes work that supports a business but does not produce a tangible commodity.</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
    <div className="qwe">
<Link to="/sift2"> <img src="https://image.freepik.com/free-vector/auto-service-illustration_1284-20618.jpg" alt="car services" /></Link>
</div>
   
      <h3>Car services</h3>
      <p> three different types of car service: Interim, Full and Major. When you visit different garages and dealerships, </p>
    </div>
  </div>
  <div class="column">
    <div class="content">
    
    <div className="qwe">
<Link to="/sift3"> <img src="https://image.freepik.com/free-vector/maintenance-concept-illustration_114360-391.jpg" alt="maintenence"/></Link>
</div>
      <h3>Maintenance</h3>
      <p>Include preventive maintenance, emergency repairs, scheduled servicing, testing and component replacements</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
   
    <div className="qwe">
<Link to="/sift4"> <img src="https://image.freepik.com/free-vector/cosmetic-product-wood-podium-with-green-background_63945-73.jpg" alt="product services"/></Link>
</div>
      <h3>Product services</h3>
      <p>Product as a service is the concept of selling the services and outcomes a product can provide rather than the product itself.</p>
    </div>
  </div>

</div>


</div>

       
    )
}

export default Services
