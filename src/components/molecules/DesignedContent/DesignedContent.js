import React from 'react';
import { TextContent } from '../../atoms/TextBox/Text';
import { Headers } from '../../atoms/Headers/Headers';
import { DesignedStyle } from './DesignedContent.style';
export const DesignedContent = () => (
  <DesignedStyle>
    <Headers content={'Introducing an extensible editor'}></Headers>
    <TextContent
      content={
        'Blogr features an exceedingly intuive interface which lets your focus on one thing: creating content. The editor supports managment of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdawn. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
      }
    ></TextContent>
    <Headers content={'Robust content managment'}></Headers>
    <TextContent
      content={
        'Flexible content managment anables users to easily move through posts. Increase the usability of yout blog by adding customized categories, sections, format, or flow. With this functionality, you are in full control.'
      }
    ></TextContent>
  </DesignedStyle>
);
