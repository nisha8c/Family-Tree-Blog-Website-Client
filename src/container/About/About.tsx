import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { IAbout } from '../../types/types';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [abouts, setAbouts] = useState<IAbout[]>([]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {

    const skillsQuery = '*[_type == "abouts"]';
    client.fetch(skillsQuery).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      {
        abouts.length && (
          <>
            <div className='app__abouts-item app_flex'>
              <img src={urlFor(abouts[currentIndex].imgUrl).toString()} alt={abouts[currentIndex].title} />
              <div className="app__abouts-content">
                <p className="p-text">{abouts[currentIndex].description}</p>
                <h4 className="bold-text">{abouts[currentIndex].title}</h4>
              </div>
            </div>

            <div className="app__abouts-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? abouts.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              <div className="app__flex" onClick={() => handleClick(currentIndex === abouts.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>

          </>
        )
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__abouts'),
  'abouts',
  'app__primarybg',
);