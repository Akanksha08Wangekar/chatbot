import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <>
            <div class="d-grid gap-2 d-md-block">
                <Link exact="true" to={'/backFrameBody'} className="nav-link px-3"> 
                    <button className="btn btn-primary" type="button">Let's Talk</button>
                </Link>
            </div>
        </>
    )
}
