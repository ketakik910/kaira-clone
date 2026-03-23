import React from 'react'
import './Page5.css'
import Slider2 from '../OtherComponents/Slider2'

function Page5() {
    const sellingitems = [
        {
            image:"https://themewagon.github.io/kaira/images/product-item-1.jpg",
            title:"DARK FLORISH ONE PIECE",
            cost:"$95.00",
        },
        {
            image:"https://themewagon.github.io/kaira/images/product-item-2.jpg",
            title:"BAGGY SHIRT",
            cost:"$55.00",
        },
        {
            image:"https://themewagon.github.io/kaira/images/product-item-3.jpg",
            title:"COTTON OFF WHITE SHIRT",
            cost:"$65.00",
        },
        {
            image:"https://themewagon.github.io/kaira/images/product-item-4.jpg",
            title:"CROP SWEATER",
            cost:"$50.00",
        },
        {
            image:"https://themewagon.github.io/kaira/images/product-item-10.jpg",
            title:"CROP SWEATER",
            cost:"$70.00",
        },
    ]
  return (
    <div className='page5 display-flex'>
      <div className="slider2">
         <div className="new-arrivals">
            <h1 className='card-title font-400'>BEST SELLING ITEMS</h1>
            <span className='discover-now'>View All Products</span>
         </div>
         <div className="main-slider">
           <Slider2 items={sellingitems}/>
         </div>
      </div>
    </div>
  )
}

export default Page5
