import React,{useState} from 'react'
import classes from './Overlay.module.css'
const Overlay=(props)=>{
    const cancelFun=()=>{
        props.fun('none')
    }
    const delFun=()=>{
        props.fun1(false)
    }
    let screen=window.innerWidth

    const [gap, setGap]= useState((screen-262)/2)
    setInterval(()=>{
        setGap((gap)=>{
        return gap=(window.innerWidth-262)/2
        })
    }, 10)
    return <React.Fragment>
<div className={classes.overlay} style={{display:`${props.display}` }}></div>
<article className={classes.article} style={{display:`${props.display}`,left:`${gap-30}px`,right:`${gap}px`}}>
    <h3 className={classes.h3}>Delete comment</h3>
    <p className={classes.p1}>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
    <div className={classes.div}>
        <button type='submit' onClick={cancelFun} className={classes.btn1}>NO, CANCEL</button>
        <button type='submit' onClick={delFun} className={classes.btn2}>YES, DELETE</button>
    </div>
</article>
    </React.Fragment>
}
export default  Overlay