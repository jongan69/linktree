import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import AppsIcon from '@material-ui/icons/Apps';
import PieChartIcon from '@mui/icons-material/PieChart';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ParticlesBg from 'particles-bg'

// Other Options for links
const discordLogo = require('../../images/discord.svg');
// import ArticleIcon from '@mui/icons-material/Article';
// const instagramLogo = require('../../images/instagram.svg');
// const linkedinLogo = require('../../images/linkedin-in.svg');
// const tiktokLogo = require('../../images/tiktok.svg');
// const whatsappLogo = require('../../images/whatsapp.svg');


export default function LinkTree() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 5,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  };

  return (
    <Container>
      <Header picture='https://avatars.githubusercontent.com/u/29899042?v=4' title='Jonathan Gan' subtitle='Software Engineer & Investor.' />
      <Button link='https://discord.gg/8ThxdFtFC7' icon={<img src={discordLogo} alt="Discord Logo"/>} name='Discord' backgroundColor={variables.discordColor} />
      <Button link='https://expo.dev/@jongan69' icon={<AppsIcon />} name=' Mobile Apps' backgroundColor={variables.twitterColor} />
      <Button link='https://github.com/jongan69' icon={<GitHubIcon />} name='Github' backgroundColor={variables.githubColor} />
      <Button link='https://docs.google.com/document/d/1euLUOVIyY6zYMQ2dA6sXCq0qt7qhCNT5zu-c7GzX0s0/edit?usp=sharing' icon={<AssignmentIndIcon />} name=' Resume' backgroundColor={variables.whatsappColor} />
      <Button link='https://share.public.com/jonngan' icon={<PieChartIcon />} name='Public' backgroundColor={variables.twitterColor} />
      <Button link='https://youtube.com/@jonngan' icon={<PlayCircleFilledWhiteIcon />} name='Youtube' backgroundColor={variables.blogColor} />
      <ParticlesBg type="random" config={config} bg={true} />
    </Container>
  )
}