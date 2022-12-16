import React from 'react'

import { Header, UserHeader, NavBar, NavBarWindow, Footer } from 'widgets'

import styles from './styles.module.scss'

function Layout({
	children,
	isUserLoggedIn,
	setIsUserLoggedIn,
	showWalletModal,
	setShowWalletModal,
	showRegModal,
	setShowRegModal,
	showSignInModal,
	isNavBarOpen,
	setIsNavBarOpen,
	setShowSignInModal
}) {
	return (
		<>
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
			<NavBarWindow
				isNavBarOpen={isNavBarOpen}
				setIsNavBarOpen={setIsNavBarOpen}
			/>
			<NavBar setIsNavBarOpen={setIsNavBarOpen} isNavBarOpen={isNavBarOpen} />
			<div className={styles.content}>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
