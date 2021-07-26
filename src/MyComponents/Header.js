import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

export default function Header(props) {

    const [searchString, setSearchString] = useState("")
    const search = (e) => {
        e.preventDefault()
        props.searchTodo(searchString)
    } 
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" aria-current="page">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" value={searchString} onChange={(e) => {setSearchString(e.target.value)}}  placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={search} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

Header.defaultProps = {
    title: "Default Title"
}

Header.propTypes = {

    title: PropTypes.string.isRequired
}
