import axios from 'axios'
import React,{useState,useEffect} from 'react';
import { SiCodeforces } from "react-icons/si";
import './ProfileDetailStyle.css'
const ProfileDetail = () => {
  const [posts,setPosts]=useState([])
  useEffect(() =>{
     axios.get("https://codeforces.com/api/user.info?handles=Utkarsh_09")
     .then(res=>{
      //  console.log(res)
       setPosts(res.data.result[0])
     })
     .catch(err=>{console.log(err)})
  },[])
  return (
    <div className='container'>
    <div className='profile_container'> 
          <a href="https://codeforces.com/profile/Utkarsh_09"><SiCodeforces size={90} style={{ color: "darkblue", marginRight: "2rem" }} /></a >
           <p>Username:{posts.handle}</p>
          <p>Rating:{posts.rating}</p>
          <p>rank:{posts.rank}</p>
          <p>MaxRank:{posts.maxRank}</p>
    </div>
    </div>
  )
  
}


export default ProfileDetail