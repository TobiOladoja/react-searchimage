import React from 'react'

const ImageList = (props) => {
    const { images } = props
    return (
        <div>
            <h1>Image List</h1>
            {images.length > 0 && images.map((image) => {
                    return <p key={image.id}>{ image.tags }</p>

                })}
            
        </div>
    )
}

export default ImageList