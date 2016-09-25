import {configure,addDecorator, setAddon, storiesOf} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
setAddon(infoAddon);

const stories = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
    stories.keys().forEach(stories)
}

configure(loadStories, module);
