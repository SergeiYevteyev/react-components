import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Welcome',  
};

export const ToStorybook = () => <p>Welcome to storybook</p>;

ToStorybook.story = {
  name: 'to Storybook',
};