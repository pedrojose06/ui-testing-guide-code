
import { http, HttpResponse } from 'msw';

import InboxScreen from './InboxScreen';

import { Default as TaskListDefault } from './TaskList.stories';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get('/tasks', () => {
          return HttpResponse.json({ tasks: TaskListDefault.args.tasks });
        }),
      ],
    },
  },
};

export const Error = {
  args: {
    error: 'Something',
  },
  parameters: {
    msw: {
      handlers: [
        http.get('/tasks', () => {
          return HttpResponse.json({ tasks: [] });
        }),
      ],
    },
  },
};