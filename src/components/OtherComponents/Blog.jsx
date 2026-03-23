import React from 'react'
import './Blog.css'

function Blog({image,Date,title,blogPara}) {
  return (
    <div className='blog'>
       <div className="image">
        <img src={image} alt="" />
       </div>
       <div className="blog-text">
        <p className="main-para small-para font-400 one" style={{textTransform:"uppercase"}}>FASHION / <span>{Date}</span></p>
        <h3 className="font-400 two" style={{textTransform:"uppercase"}}>{title}</h3>
        <p className="main-para small-para font-400 three">{blogPara}</p>
       </div>
    </div>
  )
}

export default Blog
