import type { Meta, StoryObj } from '@storybook/react';

import CommentLine from './CommentLine';

const meta = {
  title: 'molecule/CommentLine/CommentLine',
  component: CommentLine,
  tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof CommentLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {
    commentId: 1,
    nickname: '돌고래',
    picture: 'ss',
    content: '끼이익 끼이익',
    date: '2023.05.10',
    userId: 1,
    loginId: 1,
  },
};
