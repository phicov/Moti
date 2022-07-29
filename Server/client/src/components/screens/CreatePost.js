import React from "react";

const CreatePost = () =>{
  return(
    <div className="card input-filled"
    style={{
      margin: "50px auto",
      maxWidth:"60%",
      padding:"20px",
      textAlign:'center'
    }}>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
        <div className="file-field input-field">
        <div className="btn #448aff blue accent-2 hoverable">
        <span>Upload</span>
        <input type="file"/>
        </div>
        <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
        </div>
        </div>
        <button className="btn waves-effect waves-light #448aff blue accent-2 hoverable">
          Submit
          </button>
        </div>
  )
}


export default CreatePost