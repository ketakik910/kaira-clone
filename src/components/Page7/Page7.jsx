import React from 'react'
import './Page7.css'
import EffectC from '../OtherComponents/EffectC'

function Page7() {

   const cmt = [
    {
        comment:"Best fitted white denim shirt more than expected crazy soft,flexible",
        by:"DENIM CRAZE"
    },
    {
        comment:"Best fitted white denim shirt more than expected crazy soft,flexible",
        by:"DENIM CRAZE"
    },
    {
        comment:"Best fitted white denim shirt more than expected crazy soft,flexible",
        by:"DENIM CRAZE"
    },
    {
        comment:"Best fitted white denim shirt more than expected crazy soft,flexible",
        by:"DENIM CRAZE"
    },
    {
        comment:"Best fitted white denim shirt more than expected crazy soft,flexible",
        by:"DENIM CRAZE"
    }
   ] 
  return (
    <div className='page7 display-flex'>
        <div style={{height:"30px"}}>
        <h2 style={{fontSize:"1.5vw", fontWeight:"500"}}>WE LOVE GOOD COMPLIMENT</h2>
        </div>
        <div className="small-text">
        <EffectC items={cmt}/> 
        </div>

    </div>
  )
}

export default Page7
