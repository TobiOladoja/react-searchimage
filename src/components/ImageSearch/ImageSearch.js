import React from 'react'

const ImageSearch = props => {
    const { getImage } = props;
    return (
       <form onSubmit={getImage}>
           <input type="text" name="searchValue" placeholder="Search for images..."/>
           <button>Get Image</button>
       </form>
    )
}

export default ImageSearch;