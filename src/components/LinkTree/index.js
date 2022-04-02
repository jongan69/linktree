import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import variables from '../../variables';
import Header from '../Header';
import AppsIcon from '@material-ui/icons/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import PieChartIcon from '@mui/icons-material/PieChart';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GitHubIcon from '@mui/icons-material/GitHub';



// Other Options for links
// const instagramLogo = require('../../images/instagram.svg');
// const linkedinLogo = require('../../images/linkedin-in.svg');
// const tiktokLogo = require('../../images/tiktok.svg');
// const whatsappLogo = require('../../images/whatsapp.svg');


export default function LinkTree() {
  return (
    <Container>
      <Header picture='https://avatars.githubusercontent.com/u/29899042?v=4' title='Jonathan Gan' subtitle='Junior Software Engineer & Investor.' />
      <Button link='https://www.linkedin.com/newsletters/red-dev-redemption-6915857887563030528/' icon={<ArticleIcon/>} name='Blog' backgroundColor={variables.githubColor} />
      <Button link='https://expo.dev/@jongan69' icon={<AppsIcon/>} name=' Mobile Apps' backgroundColor={variables.githubColor} />
      <Button link='https://share.public.com/jonngan' icon={<PieChartIcon/>} name='Public' backgroundColor={variables.twitterColor} />
      <Button link='https://www.youtube.com/channel/UCj2qx1zXvPtzg-MDADw1kOQ' icon={<PlayCircleFilledWhiteIcon/>} name='Youtube' backgroundColor={variables.youtubeColor} />
      <Button link='https://godsunchained.com/account/register?referral=CeGtiPFBzc' icon={<SportsEsportsIcon/>} name='Gods Unchained' backgroundColor={variables.linkedinColor} />
      <Button link='https://github.com/jongan69' icon={<GitHubIcon/>} name='Github' backgroundColor={variables.githubColor} />
    </Container>
  )
}