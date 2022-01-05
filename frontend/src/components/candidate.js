
// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './candidate.css';
import Footer from './footer';

const Candidate=()=>{
   const [flag,setFlag]=useState(true);
   const change=(curUse)=>
   {
     setFlag(false);
     const temp=curUse;
     temp.t=temp.t+1;
       fetch(`/election/${temp._id}`,{
       method:'PUT',
       headers:{
         'Accept':'application/json',
         'Content-Type':'appliction/json'
       },
       body:JSON.stringify(temp)
     })
     console.log(temp.image);
   }
   const[users,setUsers]=useState([]);
   const getUsers= async ()=>
   {
      const resp=await fetch('/election');
      setUsers(await resp.json());
   }
   useEffect(()=>
   {
       getUsers();
   },[]);
  return (
    <div className='App'>
      <h1 className='text-center p-4'>List of Candidates</h1>
      {
      <div className='row'>
        {
        users.map((curUse)=>
        {
          return(
                 <div className='col-10 col-md-4 col-lg-3 card1'>
                    <div className='row'>
                          <div className='col-4'>
                              <img className='image' src={curUse.image}/>
                          </div>
                          <div className='col-8'>
                                <h4 className='p-2'>{curUse.partyname}</h4>
                                <p className='pr-3'>{curUse.name}</p>
                                {/* <div className='row'>
                                     <div className='col-4'>
                                       <a>Artices</a>
                                       <p>38</p> 
                                     </div>
                                     <div className='col-4'>
                                       <a>Artices</a>
                                       <p>38</p> 
                                     </div>
                                </div> */}
                                <div className={flag?"hi":"hidden"}>
                                <button className='btn btn-success' onClick={()=>change(curUse)}>VOTE</button>
                                </div>
                          </div>
                    </div>
               </div>
          )
          })
        }
        </div>
         } 
         <div className='footer'>
         <Footer></Footer>
         </div>
    </div>
  );
}
export default Candidate;