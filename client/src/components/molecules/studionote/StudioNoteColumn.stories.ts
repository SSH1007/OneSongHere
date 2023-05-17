import type { Meta, StoryObj } from '@storybook/react';

import StudioNoteColumn from 'components/molecules/studionote/StudioNoteColumn';

const meta = {
  title: 'molecule/StudioNote/StudioNoteColumn',
  component: StudioNoteColumn,
  tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof StudioNoteColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columnNotes: [
      { names: ['q'], duration: '8n', timing: 0, instrumentType: 'melody' },
    ],
    rowIndex: 0,
  },
};
