import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Createpoll from './createpoll'
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom.min'
const Protected = ({auth,component:Component,...rest}) => {
    return(
        <Route render={(props)=>{
            if(props.auth){
                return <props.Component />
            }
        }}/>
    )
}
export default Protected
