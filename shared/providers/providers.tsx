'use client'
import React, { ReactNode } from 'react'
import QueriesClient from './QueryClient'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<QueriesClient>
			<ToastContainer />
			{children}
		</QueriesClient>
	)
}

export default Providers
