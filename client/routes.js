import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout';
import Home from './App/Components/home';
import Hasip from './App/Components/hasip';
import NewReservation from './App/Components/newReservation';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<Home />)
        })
    }
});

FlowRouter.route('/hasip', {
    action(){
        mount(MainLayout, {
            content: (<Hasip />)
        })
    }
});

FlowRouter.route('/new-reservation', {
    action(){
        mount(MainLayout, {
            content: (<NewReservation />)
        })
    }
});
