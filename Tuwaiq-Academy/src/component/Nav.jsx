import React from 'react'

export default function Nav() {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor :"rgb(78,55,151)"}}>
  <div className="container-fluid" style={{backgroundColor :"rgb(78,55,151)"}}>
    
  <a class="navbar-brand" href="#">
      <img src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt="Bootstrap" width="180" height="60"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color : "white"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="#" style={{color : "white"}}>الرئيسية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color : "white"}}>المعسكرات والبرامج</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color : "white"}}>حول الأكاديمية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color : "white"}}>الأكاديميات التابعة</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color : "white"}}>مركز الاختبارات</a>
        </li> 
      </ul>
      <form className="d-flex" role="search">
          <a className="nav-link" href="#">تسجيل الدخول </a>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
