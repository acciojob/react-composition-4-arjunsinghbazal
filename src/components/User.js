import React, { useState } from "react";

const User=()=>{
    const [value,setvalue]=useState({});
     const formData=(e)=>{
      e.preventDefault();
      console.log({value});
     }
     const handleData=(e)=>{
        setvalue({
            ...value,[e.target.id]:e.target.value,
     })
     }
    return (
   <form onSubmit={formData}>
    <label htmlFor="Name">Name</label>
    <input type="text" id="Name" onChange={handleData}/><br/>
    <label htmlFor="Email">Email</label>
    <input type="email" id="Email" onChange={handleData}/><br/>
    <label htmlFor="Password">Password</label>
    <input type="password" id="Password" onChange={handleData}/><br/>
    <button type="submit">Submit</button>
   </form>
    )
}

export default User;