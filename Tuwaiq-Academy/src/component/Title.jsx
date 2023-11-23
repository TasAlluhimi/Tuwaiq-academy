import React from 'react'

export default function Title() {
  return (

    <div className='title-div'>
        <div className='title'>

        <div className="title-content">
        <h2>المعسكرات والبرامج</h2>

        {/* <div className="d-grid gap-4 d-md-block"> */}
        <div className="buttons">
        <button className="btn px-5 py-2" type="button" style={{borderRadius:"20px",backgroundColor:" rgb(78,55,151)", color:"white"}}>الكبار</button>
        <button className="btn px-5 py-2" type="button" style={{borderRadius:"20px",backgroundColor:" white",color:"rgb(78,55,151)"}}>الناشئون</button>
        </div>

        <img className="filter-img" src='https://tuwaiq.edu.sa/img/filter.svg'></img>

        </div>


        </div>

    </div>
  )
}
