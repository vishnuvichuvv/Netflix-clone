import React from 'react'
import { useState,useEffect } from 'react'
import instance from './baseurl'
import './Banner.css'


function Banner({fetchUrl}) {

    const[movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

     // function to call api
     async function getData(){

     const result=await instance.get(fetchUrl)
    //  console.log(result.data.results);
    setMovies(result.data.results[
        Math.floor(Math.random()*result.data.results.length-1)
    ])
     }
     useEffect(()=>{
     getData()
    },[]
     )
    //  console.log(movies);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+".....":str
    }

  return (
    <div
     className='banner'
     style={{
        backgroundImage:`url(${base_url}${movies?.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
     }}
     >
        <div className='bannerContent'>
           <h1 className='title'>{movies?.original_name}</h1>
           <p className='desc'>
            {truncate(movies?.overview,150)}
            </p>

        </div>

    </div>
  )
}

export default Banner