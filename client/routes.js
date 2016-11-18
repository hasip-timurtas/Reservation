import React from 'react'
import {mount} from 'react-mounter'

import {MainLayout} from './layouts/MainLayout'
import App from './App/App'
import NewReservation from './App/Components/reservation/newReservation'
import ManageGelirGider from './App/Components/gelirgider/manageGelirGider'
import ManageRooms from './App/Components/room/manageRooms'

FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: (<App />)
		})
	}
})

FlowRouter.route('/new-reservation', {
	action(){
		mount(MainLayout, {
			content: (<NewReservation />)
		})
	}
})

FlowRouter.route('/gelir-gider', {
	action(){
		mount(MainLayout, {
			content: (<ManageGelirGider />)
		})
	}
})

FlowRouter.route('/rooms', {
	action(){
		mount(MainLayout, {
			content: (<ManageRooms />)
		})
	}
})
