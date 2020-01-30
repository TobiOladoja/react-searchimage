import React from 'react';

const ImageList = props => {
  const { images } = props;
  return (
    <div>
      {images.map(({ id, largeImageURL, tags }) => {
        return (
          <div key={id}>
            <img src={largeImageURL} alt={tags}></img>

            <button>Search</button>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
