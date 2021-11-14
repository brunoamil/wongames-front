import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'main default',
    description: 'main default'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'Basic Default',
  description: 'Basic Description'
};
export const Default: Story = (args) => <Main {...args} />;
