import React from 'react'
import Footer from './footer'
import './home.css'
const Home = () => {
    return (
      <div className='container'>
           <div className='row header'>
                 <div className='col-md-2 col-lg-2'></div>
                 <div className='col-md-8 col-lg-8 text-center'>
                     <h1>An online voting system with </h1>
                     <h1>your needs at the forefront.</h1>
                 </div>
           </div>
           <div className='row'>
                 <div className='col-md-2 col-lg-2'></div>
                 <div className='col-md-9 col-lg-9 text-center m-1'>
                        <p className='para'>From secure polling software to the management of complex virtual voting events - we offer a range of</p>
                        <p className='para'> online voting software options that exceed expectation.</p>
                 </div>
           </div>
           <div className='row mt-3'>
               <div className='col-md-6 col-lg-6'>
                   <img src='https://www.eballot.com/hs-fs/hubfs/sub_admin-icon.png?width=83&height=83&name=sub_admin-icon.png' width="64" height="64"></img>
                   <h3>A reliable online voting tool for your group</h3>
                   <p>Run online elections among your group for a single important event. Or manage consistent, recurring votes.</p>
               </div>
               <div className='col-md-6 col-lg-6 '>
                    <img src='https://www.eballot.com/hubfs/eBallot/2019/icon-key.svg'  width="64" height="64"></img>
                    <h3>Key electronic voting features</h3>
                    <p>Never again worry about people voting twice or other forms of vote manipulation. Get results instantly. Dive deeper into vote statistics.</p>
               </div>
           </div>
           <div className='row mt-2'>
               <div className='col-md-6 col-lg-6'>
                   <img src='https://www.eballot.com/hs-fs/hubfs/interface-icon.png?width=225&height=174&name=interface-icon.png'  width="64" height="64"></img>
                   <h3>Web app-based voting platform</h3>
                   <p>Send eligible voters to a personalized voting website, no online voting app download required.</p>
               </div>
               <div className='col-md-6 col-lg-6'>
                    <img src='https://www.eballot.com/hubfs/eBallot/2019/icon-voter.svg'  width="64" height="64"></img>
                    <h3>A pleasant way to cast votes</h3>
                    <p>Your voters deserve a fair and easy to use voting website, accessible from any device.</p>
               </div>
               <Footer></Footer>
           </div>
      </div>
    )
}

export default Home
