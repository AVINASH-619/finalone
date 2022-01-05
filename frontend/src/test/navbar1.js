import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Results from './Results';
import About from './About';
function Navbar() {

    const [click, setClick] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [hide,setHide]=useState(false)
    const handleMenuBtnClick = () => {
        setClick(!click)
        setHide(false)
    }
    const showBurger = () => {
        if (window.innerWidth <= 960) {
            setShowButton(true)

        } else {
            setClick(false)
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', showBurger)
        return () => {
            window.removeEventListener('resize', showBurger)
        }
    }, [])

    return (
        <Router>
        <div className="navbar">
            <div className="logo-container">
                <h1 className="logo">EVOTE</h1>
            </div>
            <div className={hide? "hidden":""}>
            <ul className={click ? "mobile-menu full" : "nav-items"}>
                <li className="nav-item" ><Link to='/' onClick={()=>setHide(true)} >Home</Link></li>
                <li className="nav-item"><Link to='/login' onClick={()=>setHide(true)}>Login</Link></li>
                <li className="nav-item"><Link to='/Results' onClick={() => setHide(true)}>Results</Link></li>
                <li className="nav-item"><Link to='/About' onClick={() => setHide(true)}>About</Link></li>
            </ul></div>
            <div onClick={handleMenuBtnClick} className={showButton ? "menu-btn" : "hidden"}>
                 <FaBars />
            </div>
        </div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/About' component={About}></Route>
                <Route exact path='/Results' component={Results}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='*' component={error}></Route>
            </Switch>
    </Router>
    )
}

export default Navbar