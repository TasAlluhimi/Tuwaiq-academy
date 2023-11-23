import React from 'react'

function Card(props) {
  return (
    <>
            {/* {props.active == "التفاصيل" ? "btn green-button" : 'btn '} */}

            <div  className={props.type == 'برنامج' ? 'card text-bg-light mb-3 green' : 'card text-bg-light mb-3 purple'} style={{width: "25rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.type}</h5>
                    <h5 className="card-title mt-3">{props.title}</h5>
                    
                    <div className='mt-4' style={{display:"flex"}}>
                    <div style={{display:"flex"}}>
                        <img className='px-1' width={"30px"} src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                        <p className="card-text">{props.place}</p>
                    </div>

                    <div className='px-4' style={{display:"flex"}}>
                        <img className='px-1' width={"30px"} src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                        <p className="card-text">{props.time}</p>
                    </div>
                    </div>

                    <div style={{display:"flex", justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{display:"flex"}}>
                        <img className='px-1' width={"30px"} src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                        <p className="card-text">يبدأ في {props.starts}</p>
                    </div>
                    
                    <div>
                    <button type="button" style={{backgroundColor:'white', borderRadius:'15px'}} className={props.active == "التفاصيل" ? "btn green-button" : 'btn closed'}>{props.active}</button>
                    </div>
                    </div>
                    
                </div>
            </div>
            
                </>
  )
}

export default Card