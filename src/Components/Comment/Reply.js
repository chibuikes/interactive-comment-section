import React ,{useState} from "react";
import person1 from './image-amyrobson.png'
import person2 from './image-maxblagun.png'
import person3 from './image-ramsesmiron.png'
import classes from './Reply.module.css'
import reply from './icon-reply.svg'
import Textarea from "../Textarea/Textarea";

const Reply=(props)=>{
    const [val, setVal]= useState(props.score)
    const [show, setShow]= useState(false)
    const arr=[person1, person2, person3]

    const replyFun=()=>{
      setShow((show)=> {return !show})
    }
    const add=()=>{
      setVal((val)=>{return props.score+1})
    }
    const minus=()=>{
      setVal((val)=>{return props.score})
  
    }
    const send=(a)=>{
         props.send(a)
      setShow((show)=> {return !show})

    }
   
    return <React.Fragment>
<section className={classes.sec1} >   
    <div  className={classes.div} >
        <p className={classes.p11} onClick={add}>+</p>
        <p className={classes.p1} >{val}</p>
        <p className={classes.p11} onClick={minus}>-</p>
    </div>
    <div className={classes.article} >
    <main className={classes.main}>
    <div className={classes.div1}> 
    <img src={arr[props.src]} className={classes.img} alt='profile.s amyrobson'/>
    <b>{props.username}</b>
    
    <p className={classes.date}> {props.createdAt}</p>
    </div>
   
    <button  className={classes.div2} onClick={replyFun} > <img src={reply}  className={classes.img1} alt='reply'/><b>Reply</b></button>
    </main>
    
    <p className={classes.p2}><span>{`@${props.commenter} `}</span>{props.content}</p>
    </div>
    <main className={classes.mainp}>
    <div  className={classes.divp} >
        <p className={classes.p11} onClick={add}>+</p>
        <p className={classes.p1} >{val}</p>
        <p className={classes.p11} onClick={minus}>-</p>
    </div>
    <button  className={classes.div2p} onClick={replyFun} > <img src={reply}  className={classes.img1} alt='reply'/><b>Reply</b></button>

    </main>
   
    </section>
<div className={classes.wrapperp}>
{ show?
    <Textarea send={send} text={'reply'} />:''
}
</div>
<div className={classes.wrapperl}>
{ show?
    <Textarea width={'460px'} send={send} text={'reply'} />:''
}
</div>
    </React.Fragment>
}
export default Reply