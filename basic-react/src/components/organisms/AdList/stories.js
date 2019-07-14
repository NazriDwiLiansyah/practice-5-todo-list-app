import React from 'react';
import { storiesOf} from '@storybook/react';

import AdList from '.';

storiesOf('organisms/ AdList', module)
.add('example',() =>{
    return(
        <AdList/>
    )
})