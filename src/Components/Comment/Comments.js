//import classes from './Comments.module.css'
import React ,{useState} from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Comment from './Comment'
import Textarea from '../Textarea/Textarea'
import DATA from './data.json'
import ReplyMe from './ReplyMe'

const Comments=()=>{
    const [arr,setArr]=useState(DATA.comments)
    const send=(a)=>{
        const obj={
                ...a
        }
      setArr((val)=>{
        return [...val, {...obj}]
      })
    }
 
 return <React.Fragment>
 <Wrapper>
    {arr.map((data)=>{
       if(data.user.username==='juliusomo'){
return <ReplyMe  width={607.5} reply={data.replies}  username={data.user.username} key={data.id} score={data.score} content={data.content} createdAt={data.createdAt}/>

       }
        return <Comment reply={data.replies} src= {data.user.image} commenter={data.user.username} follow={data.follow} username={data.user.username} key={data.id} score={data.score} content={data.content} createdAt={data.createdAt}/>
    })}
    
 <Textarea send={send} width={'607.5px'} text={'send'}/>
   </Wrapper>
    </React.Fragment>
}
export  default Comments


   //const [comments, setCom] =useState([])
   //const [loading, setLoading]= useState(true)

   //let arr=[]
/*
    async function sendComments(){
        const response = await fetch('https://comments-8080b-default-rtdb.firebaseio.com/section.json', 
        {method:'POST',body:JSON.stringify(DATA)})
        const data = await response.json()
      
 
    }
   useEffect(()=>{sendComments()},[])*/

  /*  async function  fetchComment(){
        setLoading(true)
        const response = await fetch('https://comments-8080b-default-rtdb.firebaseio.com/section.json')
        const data = await response.json()
       
            arr.push(
                {
                 comments:data['chnjeuhdfiunjnd']['comments']   
                }
            )
        
   console.log(arr[0].comments, arr)
        
   setCom(arr[0].comments)
   setLoading(false)
 
    }*/
   //useEffect(()=>{fetchComment()},[])