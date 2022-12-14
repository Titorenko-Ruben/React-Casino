import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
	Home,
	SponsorEverton,
	SponsorWatford,
	SponsorDrake,
	Settings,
	Pay
} from 'pages'

import { Header, UserHeader, NavBar, NavBarWindow, Footer } from 'widgets'
import { SignUp, SignIn, WalletWindow } from 'shared/ui'

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
		}
	})
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
	const [isNavBarOpen, setIsNavBarOpen] = useState(false)
	const [showRegModal, setShowRegModal] = useState(false)
	const [showSignInModal, setShowSignInModal] = useState(false)
	const [showWalletModal, setShowWalletModal] = useState(false)
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
		console.log('dataBase ', dataBase)
	}, [dataBase])

	return (
		<BrowserRouter>
			{isUserLoggedIn ? (
				<UserHeader
					setIsUserLoggedIn={setIsUserLoggedIn}
					showWalletModal={showWalletModal}
					setShowWalletModal={setShowWalletModal}
					setStore={setStore}
					store={store}
				/>
			) : (
				<Header
					showRegModal={showRegModal}
					setShowRegModal={setShowRegModal}
					showSignInModal={showSignInModal}
					setShowSignInModal={setShowSignInModal}
				/>
			)}
			{isNavBarOpen ? (
				<NavBarWindow
					isNavBarOpen={isNavBarOpen}
					setIsNavBarOpen={setIsNavBarOpen}
				/>
			) : (
				<NavBar setIsNavBarOpen={setIsNavBarOpen} />
			)}
			<Routes>
				<Route
					path='/'
					element={
						<Home
							showRegModal={showRegModal}
							setShowRegModal={setShowRegModal}
						/>
					}
				/>
				<Route path='/sponsorships/everton' element={<SponsorEverton />} />
				<Route path='/sponsorships/watford' element={<SponsorWatford />} />
				<Route path='/sponsorships/drake' element={<SponsorDrake />} />
				<Route path='/settings/general' element={<Settings />} />
				<Route
					path='/pay'
					element={
						<Pay
							setStore={setStore}
							dataBase={dataBase}
							setDataBase={setDataBase}
							store={store}
						/>
					}
				/>
			</Routes>
			<Footer />
			<SignUp
				showRegModal={showRegModal}
				setShowRegModal={setShowRegModal}
				setStore={setStore}
				setIsUserLoggedIn={setIsUserLoggedIn}
				setDataBase={setDataBase}
				store={store}
				dataBase={dataBase}
			/>
			<SignIn
				showSignInModal={showSignInModal}
				setShowSignInModal={setShowSignInModal}
				setStore={setStore}
				setIsUserLoggedIn={setIsUserLoggedIn}
				dataBase={dataBase}
			/>
			<WalletWindow
				showWalletModal={showWalletModal}
				setShowWalletModal={setShowWalletModal}
			/>
		</BrowserRouter>
	)
}

export default App
