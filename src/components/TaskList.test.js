import React from 'react';
import ReactDOM from 'react-dom';
import { PureTaskList } from './TaskList';
import { withPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
    const div = document.createElement('div');
    const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
    ReactDOM.render(<PureTaskList tasks={withPinnedTasks} {...events} />, div);

    // 我们期望首先渲染标题为“任务6（固定）”的任务，而不是最后
    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null);

    ReactDOM.unmountComponentAtNode(div);
});