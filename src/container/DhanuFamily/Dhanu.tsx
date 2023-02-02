import React, { useState, useEffect } from 'react';
import { IFamily } from '../../types/types';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Dhanu.scss';

const Dhanu = () => {

  const [family, setFamily] = useState<IFamily[]>([]);

  useEffect(() => {

    const familyQuery = '*[_type == "dhanu"]';
    client.fetch(familyQuery).then((data) => {
      setFamily(data);
    });
  }, []);
  return (
    <>
      {
        family.length && (
          <div className='app__dhanu-item app_flex'>

          </div>
        )
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Dhanu, 'app__dhanu'),
  'dhanu',
  'app__primarybg',
);