import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  return (
    <div className="image-section">
      <div className="circle-image" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww')" }}></div>
      <div className="circle-image" id="img-2" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      <div className="circle-image" id="img-3"style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      <div className="circle-image" id="img-4"style={{ backgroundImage: "url('https://media.istockphoto.com/id/1442945601/photo/plate-with-inscription-premises-liability-and-gavel.webp?s=1024x1024&w=is&k=20&c=3_Y7EZkLosHRmDCNS0ooB5S-CXls_4UooVLOut_LwNA=')" }}></div>
    </div>
  );
};

export default ImageGrid;
