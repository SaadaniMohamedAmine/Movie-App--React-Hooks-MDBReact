import React from 'react'
import '../App.css'
import {MDBInput} from 'mdbreact'

const Search = ({handleSearch}) => {
    return (
        <div className="search">
            
            <MDBInput
                className='input-search' 
                icon="photo-video"  
                label="Type the Title here !!"
                style={{backgroundColor:"rgba(255,255,255,0.3)",textIndent:"50px",fontSize:"1rem",color:"rgba(0,0,0,10)",padding:"10px"}}
                onChange={e=>handleSearch(e.target.value)} 
            />
        </div>
    )
}

export default Search
