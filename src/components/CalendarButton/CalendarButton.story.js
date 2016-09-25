import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CalendarButton from './CalendarButton';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

storiesOf('CalendarButton', module)
    .addDecorator(withKnobs)
    .addWithInfo('active CalendarButton', () => (
          <CalendarButton active={boolean('active',true)} header='SEP' text='7'/>
    ),{ inline: true })
    .add('inactive CalendarButton',()=>{
          <CalendarButton header='SEP' text='7'/>
    })
    .add('CalendarButton without header',()=>{
          <CalendarButton text='+'/>
    });
