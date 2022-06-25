import React from 'react';
import "./SwipeButtons.css";
import { Replay } from '@material-ui/icons';
import { Close } from '@material-ui/icons';
import { StarRate } from '@material-ui/icons';
import { Favorite } from '@material-ui/icons';
import { FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';


function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons_repeat'>
            <Replay fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_left'>
            <Close fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_star'>
            <StarRate fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_right'>
            <Favorite fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButtons_lightning'>
            <FlashOn fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons