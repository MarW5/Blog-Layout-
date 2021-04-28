import React from 'react';
import { Header } from './Headers.style'
export const Headers = (props) => 
<Header{...props}>
    {props.content}
</Header>;
