import React from "react";

const Profile = () =>{
  return(
  <div style={{maxWidth:"100%",margin:"0px auto"}}>
    <div style = {{
      display:"flex",
      justifyContent:"space-around",
      margin:"20px 20px",
      borderBottom:"1px solid grey"
    }}>
      <div>
          <img style={{width:"30%", borderRadius:"100%"}}
          src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"
          />
      </div>
      <div>
        <h4>Zoro</h4>
        <div style={{
          display:"flex",
          justifyContent:"space-between",
          width:"108%"
      }}>
          <h5>40 posts</h5>
          <h5>40 followers</h5>
          <h5>40 following</h5>
        </div>
      </div>
    </div>
    <div className="gallery">
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
      <img className="item" src="https://repository-images.githubusercontent.com/444436968/03ab929b-0265-4e8c-97c8-e8578f02030a"/>
    </div>
  </div>
  
  );
}


export default Profile