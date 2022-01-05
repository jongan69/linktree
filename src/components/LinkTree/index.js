import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';

const githubLogo = require('../../images/github.svg');
const youtubeLogo = require('../../images/youtube.svg');
const instagramLogo = require('../../images/instagram.svg');
const linkedinLogo = require('../../images/linkedin-in.svg');
const tiktokLogo = require('../../images/tiktok.svg');
const mediumLogo = require('../../images/medium.svg');
const publicLogo = require('../../images/public.svg');

export default function LinkTree() {
  return (
    <Container>
      <Header picture='https://media-exp1.licdn.com/dms/image/D4E35AQEOnpsk1c23Iw/profile-framedphoto-shrink_400_400/0/1632365242460?e=1641430800&v=beta&t=Xv5u1g_u-l8_n8Qfrz-YAK4RK4HOQcsKG_TgNvkYPIU' title='Jonathan Gan' subtitle='Junior Software Engineer & Investor.' />
      <Button link='https://jonngan.medium.com' icon={mediumLogo} name='Medium' backgroundColor={variables.githubColor} />
      <Button link='https://share.public.com/jonngan' icon={publicLogo} name='Public' backgroundColor={variables.twitterColor} />
      <Button link='https://www.youtube.com/channel/UCj2qx1zXvPtzg-MDADw1kOQ' icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://www.linkedin.com/in/jongan69/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://github.com/jongan69' icon={githubLogo} name='Github' backgroundColor={variables.githubColor} />
    </Container>
  )
}