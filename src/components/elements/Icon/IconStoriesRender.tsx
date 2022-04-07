import React from 'react';
import Icon from './Icon';
import Layout from '../Layout/index';
import Card from '../Card/index';
import { IconsNameEnum } from './Icon.types';

const IconStoriesRender = ({ type } : {type: string}) => (
  <Layout.Content
    layout="horizontal"
    style={{
      padding: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
    }}
  >
    {IconsNameEnum.filter((t) => t.startsWith(type)).map((t) => (
      <Card.Card
        style={{ margin: '0rem 0.5rem 0.5rem 0rem', cursor: 'pointer' }}
        onClick={() => {
          const el = document.createElement('textarea');
          el.value = `<Icon type="${t}" />`;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }}
      >
        <Card.Body style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 1rem 0.5rem 1rem', flexDirection: 'column', width: '7rem',
        }}
        >
          <Icon name={t} fill="#7a7a7a" size="1.5rem" />
          <br />
          <Card.Text style={{ fontSize: '0.6rem' }}>{t}</Card.Text>
        </Card.Body>
      </Card.Card>
    ))}
  </Layout.Content>
);

export default IconStoriesRender;
