import React from 'react';
import cubVideo from '../images/cubFanS8E1thumb.webp';
import bdubVideo from '../images/bDouble0S8E1thumb.webp';
import docM77Video from '../images/docm77S8E1thumb.webp';
import ethoVideo from '../images/ethoS8E1thumb.webp';
import falseVideo from '../images/falseS8E1thumb.webp';
import geminiVideo from '../images/geminiS8E1thumb.webp';
import grianVideo from '../images/grianS8E1thumb.webp';
import hypnoVideo from '../images/hypnoS8E1thumb.webp';
import impulseVideo from '../images/impulseS8E1thumb.webp';

const VideoTwo = () => {
  return (
    <>
      <section className='video-bottom'>
        <div className='row-one'>
          <img
            className='border'
            src={bdubVideo}
            alt='b dubs season 8 episode 1'
          />
          <img
            className='border'
            src={cubVideo}
            alt='cub fan season 8 episode 1'
          />
          <img
            className='border'
            src={docM77Video}
            alt='doc m 77 season eight episode one'
          />
        </div>
        <div className='row-two'>
          <img
            className='border'
            src={ethoVideo}
            alt='b dubs season 8 episode 1'
          />
          <img
            className='border'
            src={falseVideo}
            alt='cub fan season 8 episode 1'
          />
          <img
            className='border'
            src={geminiVideo}
            alt='doc m 77 season eight episode one'
          />
        </div>
        <div className='row-two'>
          <img
            className='border'
            src={grianVideo}
            alt='b dubs season 8 episode 1'
          />
          <img
            className='border'
            src={hypnoVideo}
            alt='cub fan season 8 episode 1'
          />
          <img
            className='border'
            src={impulseVideo}
            alt='doc m 77 season eight episode one'
          />
        </div>
      </section>
    </>
  );
};

export default VideoTwo;
