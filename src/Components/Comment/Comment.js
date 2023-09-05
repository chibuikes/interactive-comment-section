import React, {useState} from 'react'
import classes from './Comment.module.css'
import person1 from './image-amyrobson.png'
import person2 from './image-maxblagun.png'
import person3 from './image-ramsesmiron.png'
import reply from './icon-reply.svg'
import ReplyMe from './ReplyMe'
import Reply from './Reply'
import juliusomo from "./image-juliusomo.png";

const Comment =(props)=>{
  const [val, setVal]= useState(props.score)
  const [show, setShow]= useState(false)
  const [reply1, setReply]= useState(props.reply)
  

  const [val1, setVal1] = useState("");
  const [ char, setChar]= useState(204)
  const arr=[person1, person2, person3]
  const click = (e) => {
  setChar((v)=>{return 204-val.length})

    if (val1.length < 204) {
      setVal1(e.target.value);
  setChar((v)=>{return 204-val1.length})


    } else if(val1.length >= 204){
      setVal1((v)=>{
        const arr=[...v]
         let ar=[]
         for(let i=0; i<203;i++){
           ar.push(arr[i])
         }

         v=ar.join('')
         return e.target.value=v
      })
    }
  
  };
  const click2=(e)=>{
    e.preventDefault()
  }
  const d = new Date();
  const day = d.getDate(); const month = d.getMonth();const year = d.getFullYear();
  const send=(a)=>{
    setReply(
      (val)=>{
        return [ ...val,{...a}]
      }
    )
  }
  const submit = (e) => {
    e.preventDefault();

 
      setReply((val)=>{
       const data={  id: Math.random().toString(),
        content: `${val1}`,
        createdAt: `${day}/${month}/${year}`,
        score: 0,
        user: {
          image: {
            png: "./images/avatars/image-amyrobson.png",
            webp: "./images/avatars/image-amyrobson.webp",
          },
          username: "juliusomo",
        },
        replies: [],}
       console.log(data)

   return [{...data},...val]
      })
 

      setShow((show)=> {return !show})

  setVal1('')
  setChar(204)
  };
  
  const add=()=>{
    setVal((val)=>{return props.score+1})
  }
  const minus=()=>{
    setVal((val)=>{return props.score})

  }
 
  const replyFun=()=>{
    setShow((show)=> {return !show})
  }


    return <React.Fragment>

   <section className={classes.sec} >

    <div  className={classes.div} >
        <p className={classes.p11}  onClick={add}>+</p>
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
  <button className={classes.div2} onClick={replyFun}> <img src={reply}  className={classes.img1} alt='reply'/><b>Reply</b></button>
  </main>
  <p className={classes.p2}>{props.content} </p>
  </div>
  <main className={classes.mainp}>
  <div  className={classes.divp} >
        <p className={classes.p11}  onClick={add}>+</p>
        <p className={classes.p1} >{val}</p>
        <p className={classes.p11} onClick={minus}>-</p>
    </div>
  <button className={classes.div2p} onClick={replyFun}> <img src={reply}  className={classes.img1} alt='reply'/><b>Reply</b></button>

  </main>
  </section>
  { show?   <form
        className={classes.sec}
        onSubmit={submit}
      >
        <div className={classes.hide}>
          <img className={classes.imgA} src={juliusomo} alt="juliusomo" />
        </div>
        <textarea className={classes.txt}  value={val1} onChange={click}   onPaste={click2} placeholder="Add a comment.."
        ></textarea>
          <div className={classes.hide}>
        <button disabled={!val1} className={classes.btn}  type="submit">
          REPLY
        </button>
          <p className={classes.p22}>{char} characters left</p>
        </div>

        <main className={classes.mainp1}>
        <div >
          <img className={classes.imgA} src={juliusomo} alt="juliusomo" />
        </div>
        <div className={classes.divp2} >
        <button disabled={!val1} className={classes.btn}  type="submit">
          REPLY
        </button>
          <p className={classes.p22}>{char} characters left</p>
        </div>
        </main>
     
     
      </form>:''
}

  <div className={classes.wrapper}>


{
reply1.map((data)=>{
  if(data.user.username==='juliusomo'){
    return <ReplyMe key={data.id}  width={460} src={data.user.image} commenter={props.commenter} username={data.user.username}  score={data.score} content={data.content} createdAt={data.createdAt} />

  }
  return <Reply key={data.id} src={data.user.image} username={data.user.username} send={send} commenter={props.commenter} score={data.score} content={data.content} createdAt={data.createdAt} />
})
}
</div>
    </React.Fragment>
}
export default Comment