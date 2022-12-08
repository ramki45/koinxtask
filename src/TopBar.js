import React from 'react'
import crypto from './assets/crypto.png';

function TopBar() {
    return (
        
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <img src={crypto} alt="crypto" width="30" height="30" class="d-inline-block align-top"  />
                    Crypto Tracker
                </div>
                <div>
                    <form className="form-inline">

                        <i className="bi bi-search" height="50px" width="36" />
                        <i className="bi bi-list" height="50px" width="36" />
                    </form>
                </div>

            </nav>
        
    )
}

export default TopBar