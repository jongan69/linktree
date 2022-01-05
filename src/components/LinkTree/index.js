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


export default function LinkTree() {
  return (
    <Container>
      <Header picture='https://media-exp1.licdn.com/dms/image/D4E35AQEOnpsk1c23Iw/profile-framedphoto-shrink_400_400/0/1632365242460?e=1641430800&v=beta&t=Xv5u1g_u-l8_n8Qfrz-YAK4RK4HOQcsKG_TgNvkYPIU' title='Jonathan Gan' subtitle='Junior Software Engineer & Investor.' />
      <Button link='https://www.instagram.com/jongan69/' icon={instagramLogo} name='Instagram' backgroundColor={variables.instagramColor} />
      <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://github.com/jongan69' icon={githubLogo} name='Github' backgroundColor={variables.githubColor} />
      <Button link='https://www.linkedin.com/in/jongan69/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
      <Button link='https://www.tiktok.com/@jonngan?' icon={tiktokLogo} name='Tiktok' backgroundColor={variables.githubColor} />
    </Container>
  )
}