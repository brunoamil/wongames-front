import { Story, Meta } from '@storybook/react/types-6-0';
import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
);
