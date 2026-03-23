import React from 'react'
import './Page2.css'
import Card from '../OtherComponents/Card'
import { CiCalendar } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { LuRefreshCcw } from "react-icons/lu";

function Page2() {
  return (
    <div className='page2 display-flex'>
      <div className="page2-part1 display-flex">
        <Card icon={<CiCalendar />}  title={"Book An Appointment"} para={"At imperdiet dui accumsan sit amet nulla risus est ultricies quis."}/>
        <Card icon={<BsHandbag />} title={"Pick up in store"} para={"At imperdiet dui accumsan sit amet nulla risus est ultricies quis."}/>
        <Card icon={<GoGift />} title={"Special packaging"} para={"At imperdiet dui accumsan sit amet nulla risus est ultricies quis."}/>
        <Card icon={<LuRefreshCcw />} title={"free global returns"} para={"At imperdiet dui accumsan sit amet nulla risus est ultricies quis."}/>
      </div>
      <div className="page2-part2">
        <div className="container">
          <div className="img-container">
            <img src="https://themewagon.github.io/kaira/images/cat-item1.jpg" alt="" />
          </div>
          <p className='main-para'>SHOP FOR MEN</p>
        </div>
        <div className="container">
        <div className="img-container">
        <img src="https://themewagon.github.io/kaira/images/cat-item2.jpg" alt="" />
        </div>
        <p className='main-para'>SHOP FOR WOMEN</p>
        </div>
        <div className="container">
        <div className="img-container">
        <img src="https://themewagon.github.io/kaira/images/cat-item3.jpg" alt="" />
        </div>
        <p className='main-para'>SHOP ACCESSORIES</p>
        </div>
      </div>
    </div>
  )
}

export default Page2
