import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaBars} from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import './nav.css'
const Nav = () => {
  const [click, setClick] = useState(false)
  const [showButton, setShowButton] = useState(true);
  const showBurger = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false)

    } else {
      setClick(false)
      setShowButton(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showBurger)
    return () => {
      window.removeEventListener('resize', showBurger)
    }
  }, [])
  return (
    <div>
      <h2 className="logo">EVOTE</h2>
      <div className={showButton ? "laptop" : "hidden"}>
        <ul className="nav-items">

          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/Login'>Login</Link></li>
          {/* <li className="nav-item"><Link className="nav-link" to='/CreatePoll'>CreatePoll</Link></li> */}
          <li className="nav-item"><Link className="nav-link" to='/Results'>Results</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/candidate'>Candidates</Link></li>
          {/* <li className="nav-item"><Link className="nav-link" to='/Register'>Register</Link></li> */}
        </ul>
      </div>

      <div className={showButton ? "hidden" : "laptop"}>
        <button className="Bar" onClick={() => setClick(!click)}>{!click ? <FaBars /> : <CgClose />}</button>
        <div className={click ? "show" : "hidden"}>
          <ul className="nav-items1">
            <li className="nav-item"><Link className="nav-link" to='/' onClick={() => setClick(!click)}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/Login' onClick={() => setClick(!click)}>Login</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to='/CreatePoll' onClick={() => setClick(!click)}>CreatePoll</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to='/Results' onClick={() => setClick(!click)}>Results</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to='/Register' onClick={() => setClick(!click)}>Register</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Nav;
