// FormAndMap.js
import React from 'react';
import './FormAndMap.css';

const FormAndMap = () => {
  return (
    <section className="content-section">
      {/* Form Section */}
      <div className="form-section">
        <h3>Form Details</h3>
        <form action="#">
         <div id='emailph'>
        <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" /> 
        </div>
            
        <div>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" />
        </div>
          </div>
          
         <label htmlFor="name">Full name</label>
         <input type="text" id="name" placeholder="Enter your full name" />
         
         <label htmlFor="address">Address</label>
         <input type="text" id="address" placeholder="Enter your address" />
         
          <div id='lastcontent'>
            
          <div>
          <label htmlFor="postcode">Post code</label>
          <input type="text" id="postcode" placeholder="Enter your post code" />
          </div>

         <div> 
          <label htmlFor="city">City</label><br/>
          <input type="text" id="city" placeholder="Enter your city" />
         </div>
         
          <div> 
          <label htmlFor="latitude">Latitude</label>
          <input type="text" id="latitude"  />
          </div>
         <div>
         <label htmlFor="longitude">Longitude</label>
          <input type="text" id="longitude"  />
          
         </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      {/* Map Section */}
      <div className="map-section">
        <h3>Map</h3>
        <div id="map"></div>
      </div>
    </section>
  );
}

export default FormAndMap;