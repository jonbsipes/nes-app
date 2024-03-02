import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as NESLogo } from '../../assets/NES LOGO.svg'

import './navigation.styles.scss'

const Navigation = () =>{
    return(
        <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <NESLogo className="logo"/>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/ref'>
                REFERENCES
            </Link>
            <Link className="nav-link" to='/cus'>
                CU LIST
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;