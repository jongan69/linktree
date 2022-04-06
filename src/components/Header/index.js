import React from 'react';
import { Container, Picture, Title, Subtitle } from './styles';

export default function Header({ picture, title, subtitle }) {
  return (
    <>
      <Picture background={picture} />
      <Title> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </>
  )
}
