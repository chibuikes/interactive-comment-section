import React, { useState } from "react";
import classes from "./Textarea.module.css";
import juliusomo from "./image-juliusomo.png";
const Textarea = (props) => {
  const [val, setVal] = useState("");
  const [ char, setChar]= useState(204)
  const click = (e) => {
  setChar((v)=>{return 204-val.length})

    if (val.length < 204) {
      setVal(e.target.value);
  setChar((v)=>{return 204-val.length})


    } else if(val.length >= 204){
      setVal((v)=>{
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
  //useEffect(() => { sendComments();}, []);
  const d = new Date();
  const day = d.getDate(); const month = d.getMonth();const year = d.getFullYear();

  const submit = (e) => {
    e.preventDefault();

    props.send({
      id: Math.random().toString(),
      content: `${val}`,
      createdAt: `${day}/${month}/${year}`,
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    });


 setChar(204)
  setVal('')
  };
  return (
    <React.Fragment>
      <form
        className={classes.sec}
        style={{width:props.width}}
        onSubmit={submit}
      >
        <div className={classes.divp}>
          <img className={classes.img} src={juliusomo} alt="juliusomo" />
        </div>
        <textarea
          className={classes.txt}
          value={val}
          onChange={click}
          onPaste={click2}
          placeholder="Add a comment.."
        ></textarea>
        <main className={classes.mainp}>
        <div className={classes.divp3}>
          <img className={classes.img} src={juliusomo} alt="juliusomo" />
        </div>
        <div className={classes.divp1}>
        
        <button className={classes.btn} disabled={!val} type="submit">
          {props.text}
        </button>
          <p className={classes.p22}>{char} characters left</p>
        </div>
        </main>
      </form>
    </React.Fragment>
  );
};
export default Textarea;
