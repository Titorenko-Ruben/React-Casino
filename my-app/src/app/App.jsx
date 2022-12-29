import React, { useEffect, useState, createContext } from 'react'
import { ModalProvider } from 'react-modal-hook'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from './Layout'
import Router from './Router'

export const Store = createContext()
export const DataBase = createContext()

function App() {
	const [store, setStore] = useState({
		user: {
			balance: '',
			email: '',
			username: '',
			day: '',
			month: '',
			year: '',
			password: '',
			cardInfo: {
				number: '',
				month: '',
				year: '',
				holder: '',
				cvv: ''
			}
		},
		isUserLoggedIn: false
	})
	const [isNavBarOpen, setIsNavBarOpen] = useState(false)
	const [dataBase, setDataBase] = useState(
		JSON.parse(localStorage.getItem('DataBase')) || {
			users: [
				{
					balance: '1000000',
					email: 'admin@gmail.com',
					username: 'Admin',
					day: '1',
					month: '1',
					year: '2001',
					password: 'Admin123',
					cardInfo: {
						number: '1111 1111 1111 1111',
						month: '1',
						year: '21',
						holder: 'Admin',
						cvv: '111'
					}
				}
			]
		}
	)

	useEffect(() => {
		localStorage.setItem('DataBase', JSON.stringify(dataBase))
	}, [dataBase])

	return (
		<BrowserRouter>
			<Store.Provider value={[store, setStore]}>
				<DataBase.Provider value={[dataBase, setDataBase]}>
					<ModalProvider>
						<Layout
							isNavBarOpen={isNavBarOpen}
							setIsNavBarOpen={setIsNavBarOpen}
						>
							<Router isNavBarOpen={isNavBarOpen} />
						</Layout>
					</ModalProvider>
				</DataBase.Provider>
			</Store.Provider>
		</BrowserRouter>
	)
}

export default App
