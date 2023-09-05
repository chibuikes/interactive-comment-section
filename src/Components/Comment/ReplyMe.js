import React,{useState} from 'react'
import classes from './ReplyMe.module.css'
import currentuser from './image-juliusomo.png'
import edit from './icon-edit.svg'
import deleted from './icon-delete.svg'
import  ReactDOM from 'react-dom'
import Overlay from '../Overlay/Overlay'


const ReplyMe=(props)=>{
    const [val, setVal]= useState(props.score)
    const [show, setShow]= useState(true)
    const [display, setDisplay]=useState('none')
    const [del, setDel]= useState(true)
  const [valTxt, setValTxt]= useState(props.content)
  const [content , setContent]=useState(props.content)
  const [ char, setChar]= useState(203-content.length)

    const editFun=()=>{
      setShow((show)=> {return !show})
    
    }
const deleteFun=()=>{
  setDisplay('block')
}


const change=(e)=>{
  setChar(()=>{return 204-valTxt.length})

   if(valTxt.length<204){
    setValTxt(e.target.value)

   }
 
 else {
    setValTxt((v)=>{
      const arr=[...v]
       let ar=[]
       for(let i=0; i<203;i++){
         ar.push(arr[i])
       }

       v=ar.join('')
       return e.target.value=v
    })
  }

}
const paste=(e)=>{ e.preventDefault()}
    const add=()=>{
        setVal((val)=>{return props.score+1})
      }
      const minus=()=>{
        setVal((val)=>{return props.score})
    
      }
      const submit=(e)=>{
        e.preventDefault()
      setShow((show)=> {return !show})

        setContent(valTxt)
      }
const fun=(a)=>{
  setDisplay(a)
  
}
const fun1=(a)=>{
  setDel(a)
  setDisplay('none')
}

    return <React.Fragment>
        {
            ReactDOM.createPortal(<Overlay  fun1={fun1} fun={fun} display={display}/>, document.getElementById('rooty'))
        }

{del?<section  className={classes.sec1} style={{'width':`${props.width}px`}} >   
    <div  className={classes.div} >
        <p className={classes.p11} onClick={add}>+</p>
        <p className={classes.p1} >{val}</p>
        <p className={classes.p11} onClick={minus}>-</p>
    </div>
    <div className={classes.article} >
    <main className={classes.main}>
    <div className={classes.div1}> 
    <img src={currentuser}className={classes.img} alt='profile.s amyrobson'/>
    <b>{props.username}</b>
    <p className={classes.btn1}>you</p>
    <p className={classes.date}> {props.createdAt}</p>
    </div>
    <div className={classes.flex} >
    <button  className={classes.div2} onClick={deleteFun} > <img src={deleted}  className={classes.img1} alt='delete'/><b> Delete</b></button>
    <button  className={classes.div3} onClick={editFun} > <img src={edit}  className={classes.img1} alt='edit'/><b>Edit</b></button>
    </div>
     </main>
     {show? <p className={classes.p2}><span>{props.commenter?`@${props.commenter} `:''}</span>{content} {props.content==='guys please follow me on'?
     <a href='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08'>Twitter</a>
    :''} </p>: <form  onSubmit={submit} className={classes.form}>
     <textarea className={classes.text} value={valTxt} onChange={change} onPaste={paste} placeholder='Add ajjj comment... '></textarea>
<div className={classes.flex1}>
<p className={classes.p22}>{char} characters left</p>

<button type='submit' disabled={!valTxt} className={classes.btn}>UPDATE</button>
  </div>      </form>}
    </div>
    <main className={classes.mainp}>
    <div  className={classes.divp} >
        <p className={classes.p11} onClick={add}>+</p>
        <p className={classes.p1} >{val}</p>
        <p className={classes.p11} onClick={minus}>-</p>
    </div>
    <div className={classes.flexp} >
    <button  className={classes.div2} onClick={deleteFun} > <img src={deleted}  className={classes.img1} alt='delete'/><b> Delete</b></button>
    <button  className={classes.div3} onClick={editFun} > <img src={edit}  className={classes.img1} alt='edit'/><b>Edit</b></button>
    </div>
    </main>
    </section>:''}
  

    </React.Fragment>
}
export default ReplyMe