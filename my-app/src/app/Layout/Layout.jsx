import React, { useContext } from 'react'

import { Store } from 'app/App'
import { Header, UserHeader, NavBar, NavBarWindow, Footer } from 'widgets'

function Layout({
	children,
	showRegModal,
	setShowRegModal,
	showSignInModal,
	isNavBarOpen,
	setIsNavBarOpen,
	setShowSignInModal
}) {
	const [store] = useContext(Store)

	return (
		<>
			{store.isUserLoggedIn ? (
				<UserHeader />
			) : (
				<Header
					showRegModal={showRegModal}
					setShowRegModal={setShowRegModal}
					showSignInModal={showSignInModal}
					setShowSignInModal={setShowSignInModal}
				/>
			)}
			<NavBarWindow
				isNavBarOpen={isNavBarOpen}
				setIsNavBarOpen={setIsNavBarOpen}
			/>
			<NavBar setIsNavBarOpen={setIsNavBarOpen} isNavBarOpen={isNavBarOpen} />
			<div>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
