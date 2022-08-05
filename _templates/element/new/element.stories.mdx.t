---
to: src/components/elements/<%= name %>/<%= name %>.stories.mdx
---
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import <%= name %> from './<%= name %>';
import ApplicationProvider from '../../providers/ApplicationProvider/ApplicationProvider';

<Meta title="Components/<%= name %>" component={<%= name %>}  decorators={[(Story) => <ApplicationProvider>{Story()}</ApplicationProvider>]}/>

# <%= name %>

This is a small emblem commonly used to represent tags.

<Canvas>
    <<%= name %>>Hello World!<%= name %></<%= name %>>
</Canvas>

### Properties

|Property|Type|Default Value|Description|Required|
|---|---|---|---|---|
|testingID| string | - | The id used for testing purposes.<br/>`<div data-testid="my-test-id"/>` |No|
