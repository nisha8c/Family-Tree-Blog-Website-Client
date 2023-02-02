import React, { useState, useEffect } from 'react';
import { IFamily } from '../../types/types';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Chavan.scss';

const Chavan = () => {
  const [family, setFamily] = useState<IFamily[]>([]);

  useEffect(() => {

    const familyQuery = '*[_type == "chavan"]';
    client.fetch(familyQuery).then((data) => {
      setFamily(data);
    });
  }, []);

  return (
    <>
      {
        family.length && (
          <div className='app__chavan-item app_flex'>

          </div>
        )
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Chavan, 'app__chavan'),
  'chavan',
  'app__primarybg',
);