import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout';
import App from './App/App';
import NewReservation from './App/Components/newReservation';
import ManageGelirGider from './App/Components/manageGelirGider';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />)
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

FlowRouter.route('/gelir-gider', {
    action(){
        mount(MainLayout, {
            content: (<ManageGelirGider />)
        })
    }
});
