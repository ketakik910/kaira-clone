import React from 'react'
import './Page9.css'
import Blog from '../OtherComponents/Blog'

function Page9() {
    const blog = [
        {
            image:"https://themewagon.github.io/kaira/images/post-image1.jpg",
            Date:"JAN 1, 2025",
            title:"HOW TO LOOK OUTSTANDING IN PASTEL",
            blogPara:"Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...",
        },
        {
            image:"https://themewagon.github.io/kaira/images/post-image2.jpg",
            Date:"JUL 11, 2024",
            title:"Top 10 fashion trend for summer",
            blogPara:"Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
        },
        {
            image:"https://themewagon.github.io/kaira/images/post-image3.jpg",
            Date:" jul 11, 2022",
            title:"Crazy fashion with unique moment",
            blogPara:"Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
        }
    ]
  return (
    <div className='page9 display-flex'>
      <div className="box1 display-flex">
      <div className="slider2">
         <div className="new-arrivals">
            <h1 className='card-title font-400'>READ BLOG POST</h1>
            <span className='discover-now'>View All</span>
         </div>
         <div className="main-slider display-flex ress" style={{gap:"1.5vw"}}>
           {blog.map((val,index)=>(
             <Blog
               key={index}
               image={val.image}
               Date={val.Date}
               title={val.title}
               blogPara={val.blogPara}
             />
           ))}
         </div>
      </div>
      </div> 
         <div className="logos">
           <img src="https://themewagon.github.io/kaira/images/logo1.png" alt="" />
           <img src="https://themewagon.github.io/kaira/images/logo2.png" alt="" />
           <img src="https://themewagon.github.io/kaira/images/logo3.png" alt="" />
           <img src="https://themewagon.github.io/kaira/images/logo4.png" alt="" />
           <img src="https://themewagon.github.io/kaira/images/logo5.png" alt="" />
         </div>
     
    </div>
  )
}

export default Page9
