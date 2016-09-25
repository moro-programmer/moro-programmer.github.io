import React from 'react';
import { storiesOf } from '@kadira/storybook';
import IconPanel from './IconPanel';

storiesOf('IconPanel', module)
    .add('Icon with two text lines', () => (
      <IconPanel icon="cake">
          <div>First line</div>
          <div>Second Line</div>
      </IconPanel>
    ))
    .add('Icon with one text line', () => {
      <IconPanel icon="group" iconAlign="bottom">
          <div>First line</div>
      </IconPanel>
    });
