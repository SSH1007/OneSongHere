import type { Meta, StoryObj } from '@storybook/react';

import StudioNoteContainer from 'components/molecules/studionote/StudioNoteContainer';

const meta = {
  title: 'molecule/StudioNote/StudioNoteContainer',
  component: StudioNoteContainer,
  tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof StudioNoteContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    notes: [
      { names: ['C4'], duration: '8n', timing: 0, instrumentType: 'melody' },
      {
        names: ['D#4', 'E4'],
        duration: '8n',
        timing: 0,
        instrumentType: 'melody',
      },
      { names: ['C4'], duration: '8n', timing: 0, instrumentType: 'melody' },
      { names: ['kick'], duration: '8n', timing: 0, instrumentType: 'beat' },
    ],
    scrollPosition: 1,
    updateScrollPosition: (position) => console.log(position),
    noteColumnStyle: Array(160).fill(false),
    columnNum: 160,
  },
};
