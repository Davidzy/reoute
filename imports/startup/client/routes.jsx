import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

// layouts and pages
import { AppLayout } from '../../ui/layouts/app-layout';
import { Homepage} from '../../ui/pages/homepage';

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppLayout, {content: <Homepage />})
  }
});
