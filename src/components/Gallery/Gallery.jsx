import React from 'react';
import photos from '../../data/photos';
import videos from '../../data/videos';
import './Gallery.css';

const Gallery = () => (
  <div className="gallery-page">
    <h2>📸 Photo Gallery</h2>
    <div className="gallery-grid">
      {photos.map(photo => (
        <div key={photo.id} className="gallery-card">
          <img src={photo.imageUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>

    <h2>🎥 Video Gallery</h2>
    <div className="gallery-grid">
      {videos.map(video => (
        <div key={video.id} className="gallery-card">
          <div className="video-wrapper">
            <iframe
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
