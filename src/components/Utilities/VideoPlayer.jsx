'use client';

import { useState } from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  const handlePlay = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: '300',
    height: '250',
  };

  const Player = () => (
    <div className="fixed bottom-2 right-2">
      <button
        onClick={handlePlay}
        className="text-color-primary float-right bg-color-secondary px-3 mb-2"
      >
        X
      </button>
      <YouTube
        videoId={youtubeId}
        onReady={(e) => e.target.pauseVideo()}
        opts={option}
        onError={() => alert('video is broken, try another video')}
      />
    </div>
  );

  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handlePlay}
      className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark hover:bg-color-accent rounded-md"
    >
      NONTON TRAILER
    </button>
  );
}
