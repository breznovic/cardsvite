import { Meta, Story } from '@storybook/react';
import Header from './Header';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

export const Default: Story = () => <Header />;

export const WithButton: Story = () => (
  <Header>
    <Button variant="primary">Sign in</Button>
  </Header>
);