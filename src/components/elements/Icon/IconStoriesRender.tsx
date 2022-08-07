/* eslint-disable react/destructuring-assignment */
import React, { useMemo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Icon from './Icon';
import TextInput from '../TextInput/TextInput';
import Layout from '../Layout/index';
import Card from '../Card/index';
import { IconsNameEnum } from './Icon.types';

const IconStoriesRender = (props : {type: string}) => {
  const [filter, setFilter] = useState('');

  const handleSearch = useDebouncedCallback((value: string) => {
    setFilter(value);
  }, 100);

  const items = useMemo(() => IconsNameEnum.filter((t) => t.startsWith(props.type)).filter((t) => t.toLowerCase().includes(filter.toLowerCase())).map((t) => (
    <Card
      style={{ margin: '0rem 0.5rem 0.5rem 0rem', cursor: 'pointer' }}
      onClick={() => {
        const el = document.createElement('textarea');
        el.value = `<Icon name="${t}" />`;
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
    </Card>
  )), [filter, props.type]);

  return (
    <Layout.Content
      layout="horizontal"
      style={{
        padding: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <TextInput type="serch" placeholder="Search..." onChange={handleSearch} />
      </div>
      <Layout.Content
        layout="horizontal"
        style={{
          paddingTop: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}
      >
        {items}
      </Layout.Content>
    </Layout.Content>
  );
};

export default IconStoriesRender;
