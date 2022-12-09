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

import { Header, UserHeader, NavBar, Footer } from 'widgets'
import { SignUp, SignIn, WalletWindow } from 'shared/ui'

function App() {
	const [user, setUser] = useState({})
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
	const [showRegModal, setShowRegModal] = useState(false)
	const [showSignInModal, setShowSignInModal] = useState(false)
	const [showWalletModal, setShowWalletModal] = useState(false)
	const [isPagePayOpen, setIsPagePayOpen] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('isPagePayOpen') === 'true') {
			setIsPagePayOpen(true)
		}
		if (localStorage.getItem('isUserLoggedIn') === 'true') {
			setIsUserLoggedIn(true)
		}
	}, [])

	console.log(isPagePayOpen)

	return (
		<BrowserRouter>
			{isUserLoggedIn ? (
				<UserHeader
					setIsUserLoggedIn={setIsUserLoggedIn}
					showWalletModal={showWalletModal}
					setShowWalletModal={setShowWalletModal}
				/>
			) : (
				<Header
					showRegModal={showRegModal}
					setShowRegModal={setShowRegModal}
					showSignInModal={showSignInModal}
					setShowSignInModal={setShowSignInModal}
				/>
			)}
			<NavBar />
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
				<Route path='/settings' element={<Settings />} />
				<Route path='/pay' element={<Pay />} />
			</Routes>
			<Footer />
			<SignUp
				showRegModal={showRegModal}
				setShowRegModal={setShowRegModal}
				setUser={setUser}
				setIsUserLoggedIn={setIsUserLoggedIn}
			/>
			<SignIn
				showSignInModal={showSignInModal}
				setShowSignInModal={setShowSignInModal}
				setUser={setUser}
				setIsUserLoggedIn={setIsUserLoggedIn}
			/>
			<WalletWindow
				showWalletModal={showWalletModal}
				setShowWalletModal={setShowWalletModal}
			/>
		</BrowserRouter>
	)
}

export default App
