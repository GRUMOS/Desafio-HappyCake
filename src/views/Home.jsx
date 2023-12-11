import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <h1>
        Bienvenido a{' '}
        <span className="happy-cake">
          <FontAwesomeIcon icon={faBirthdayCake} /> Happy Cake
        </span>
      </h1>
      <div className='custom-small'>
        <div className='custom-imagen'>
          <img
            src="https://scontent.fscl9-1.fna.fbcdn.net/v/t39.30808-6/277584229_478197260672565_8229963378411888429_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFvspA-7b-jZDZEe5yVpdQKZIF14HShIENkgXXgdKEgQ1g2CSbqcRVYEqFExz4RcR19EPbm4Ke1dbGn003B0tz7&_nc_ohc=ZpGAVcm3_34AX8UcFO9&_nc_ht=scontent.fscl9-1.fna&oh=00_AfDZZNqaY2LGbUzHsOwQouq4C2BLkibcNDegag3SJnM4Hg&oe=657D4BDC"
            alt="torta"
            width="200px"
          />
        </div>
      </div>
      <p>El lugar de los pasteles felices</p>
    </div>
  );
}

export default Home;
