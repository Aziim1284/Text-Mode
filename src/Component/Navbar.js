import React from 'react'
import { a } from 'react-router-dom'

function NavBar(props){
   

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
  <div className="container-fluid">
    <a className="navbar-brand  text-warning" href="Navb">{props.text}   </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-warning" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-warning" href="#">Link</a>
        </li>
        <li className="nav-item dropdown   text-warning">
          <a className="nav-link dropdown-toggle text-warning" href="/dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item  text-warning " href="/action">Action</a></li>
            <li><a className="dropdown-item   text-warning" href="/another">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item  text-warning" href="/something">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-warning " href={`/disable`}>Disabled</a>
        </li>
      </ul>
     
          
            <button type="button" onClick={()=>{props.toggleMode('primary')}}   className="btn btn-primary mx-2">Primary</button>
            <button type="button" onClick={()=>{props.toggleMode('secondary')}}   className="btn btn-secondary  mx-2">Secondary</button>
            <button type="button" onClick={()=>{props.toggleMode('success')}}   className="btn btn-success  mx-2">Success</button>
            <button type="button" onClick={()=>{props.toggleMode('danger')}}   className="btn btn-danger  mx-2">Danger</button>
            <button type="button" onClick={()=>{props.toggleMode('warning')}}   className="btn btn-warning  mx-2">Warning</button>
            <button type="button" onClick={()=>{props.toggleMode('info')}}   className="btn btn-info  mx-2">Info</button>
           

            <div className={`form-check form-switch mx-3 text-${props.mode === 'warning'?'black':'warning'}`} >
           <input className="form-check-input" onClick={props.toggleMode}    type="checkbox" role="switch" id="flexSwitchCheckDefault" />
           <label className="form-check-label"   htmlFor="flexSwitchCheckDefault">Toggler </label>
        </div>
        
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-primary text-black "   type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
}
export default NavBar