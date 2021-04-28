import React from 'react';
import { TextParagraph } from './Text.styles';

export const TextContent = (props) => 
<TextParagraph {...props}>{props.content}
</TextParagraph>;
