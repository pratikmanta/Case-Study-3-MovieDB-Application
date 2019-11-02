import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/' style={{cursor:'pointer'}} className="navbar-brand">Home</Link>
        <div className='mx-auto'>
            <Link to='/signin' className='btn btn-warning text-dark m-1 p-2'>Sign In</Link>
        </div>
    </nav>
    )
  
}

export default Navigation;

