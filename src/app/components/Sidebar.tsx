'use client';

import React, { useState } from 'react';
import { IconDownload, IconTemplate, IconPhoto, IconPhotoVideo, IconLetterT, IconMusic, IconTransitionRight } from '@tabler/icons-react';
import '../css/Sidebar.css'; 
import DownloadComponent from '../components/Download';


const Sidebar: React.FC<{ onSelect: (component: string) => void }> = ({ onSelect }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
    onSelect(iconName); 
  };

  return (

    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li
            className= { activeIcon === 'photo' ? 'active' : ''}
            onClick={() => handleIconClick('photo')}>
              <IconDownload className="icon" />
          </li>
          <li            
            className={activeIcon === 'photo' ? 'active' : ''}
            onClick={() => handleIconClick('photo')}>
            <IconTemplate className="icon" />
          </li>
          <li
            className={activeIcon === 'photo' ? 'active' : ''}
            onClick={() => handleIconClick('photo')}
          >
            <IconPhoto className="icon" />
          </li>
          <li
            className={activeIcon === 'photo-video' ? 'active' : ''}
            onClick={() => handleIconClick('photo-video')}
          >
            <IconPhotoVideo className="icon" />
          </li>
          <li
            className={activeIcon === 'letter' ? 'active' : ''}
            onClick={() => handleIconClick('letter')}
          >
            <IconLetterT className="icon" />
          </li>
          <li
            className={activeIcon === 'music' ? 'active' : ''}
            onClick={() => handleIconClick('music')}
          >
            <IconMusic className="icon" />
          </li>
          <li
            className={activeIcon === 'transition' ? 'active' : ''}
            onClick={() => handleIconClick('transition')}
          >
            <IconTransitionRight className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
