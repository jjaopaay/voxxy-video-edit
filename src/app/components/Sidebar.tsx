'use client';

import React, { useState } from 'react';
import { IconDownload, IconTemplate, IconPhoto, IconPhotoVideo, IconLetterT, IconMusic, IconTransitionRight } from '@tabler/icons-react';
import '../css/Sidebar.css';
import Import from '../components/Import'; // Adjust import based on your actual file structure

const Sidebar: React.FC<{ onSelect: (component: string) => void }> = ({ onSelect }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <div
            className={`menu-item ${activeIcon === 'import' ? 'active' : ''}`}
            onClick={() => handleIconClick('import')}
          >
            <IconDownload className="icon" />
            <span>Import</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'template' ? 'active' : ''}`}
            onClick={() => handleIconClick('template')}
          >
            <IconTemplate className="icon" />
            <span>Template</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'image' ? 'active' : ''}`}
            onClick={() => handleIconClick('image')}
          >
            <IconPhoto className="icon" />
            <span>Image</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'effect' ? 'active' : ''}`}
            onClick={() => handleIconClick('effect')}
          >
            <IconPhotoVideo className="icon" />
            <span>Effect</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'text' ? 'active' : ''}`}
            onClick={() => handleIconClick('text')}
          >
            <IconLetterT className="icon" />
            <span>Text</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'audio' ? 'active' : ''}`}
            onClick={() => handleIconClick('audio')}
          >
            <IconMusic className="icon" />
            <span>Audio</span>
          </div>
          <div
            className={`menu-item ${activeIcon === 'transition' ? 'active' : ''}`}
            onClick={() => handleIconClick('transition')}
          >
            <IconTransitionRight className="icon" />
            <span>Transition</span>
          </div>
        </div>
      </div>

      {activeIcon && (
        <div className="tool-area">
          {activeIcon === 'import' && <Import />}
          {/* Add additional components for other icons as needed */}
        </div>
      )}
    </>
  );
};

export default Sidebar;
