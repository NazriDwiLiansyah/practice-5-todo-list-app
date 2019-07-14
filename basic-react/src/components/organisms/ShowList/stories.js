import React from 'react';
import { storiesOf} from '@storybook/react';

import ShowList from '.';

storiesOf('organisms/ SowList', module)
.add('example',() =>{
    return(
        <ShowList/>
    )
})