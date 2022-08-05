import React from 'react';
import Card from './Card';
import CardBody from './CardBody';
import CardImage from './CardImage';
import CardText from './CardText';
import CardTitle from './CardTitle';
import CardLink from './CardLink';
import { ICardProps } from './Card.types';

interface ICompoundedComponent extends React.ForwardRefExoticComponent<ICardProps> {
  Body: typeof CardBody;
  Image: typeof CardImage;
  Text: typeof CardText;
  Title: typeof CardTitle;
  Link: typeof CardLink;
}

export default Object.assign(Card, {
  Body: CardBody,
  Image: CardImage,
  Text: CardText,
  Title: CardTitle,
  Link: CardLink,
}) as ICompoundedComponent;
