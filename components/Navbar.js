import React, { Component } from 'react'
import Link from 'next/link';

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">JUSTIN BUTH</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/projects"><a className="nav-link">Projects</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Contact</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Resume</a></Link>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
    )
  }
}


export default Navbar
