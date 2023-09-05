import classes from './Wrapper.module.css'
import React  from 'react'
const Wrapper =(props)=>{


  
    return<div className={classes.div} >
        {props.children}
    </div>
}
export default Wrapper