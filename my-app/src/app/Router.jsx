import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
	Home,
	SponsorEverton,
	SponsorWatford,
	SponsorDrake,
	Settings,
	Pay
} from 'pages'

import { ROUTES } from 'shared/consts'

function Router({
	showRegModal,
	setShowRegModal,
	isUserLoggedIn,
	dataBase,
	setDataBase
}) {
	return (
		<Routes>
			<Route
				path={ROUTES.HOME}
				element={
					<Home
						showRegModal={showRegModal}
						setShowRegModal={setShowRegModal}
						isUserLoggedIn={isUserLoggedIn}
					/>
				}
			/>
			<Route path={ROUTES.SPONSOR_EVERTON} element={<SponsorEverton />} />
			<Route path={ROUTES.SPONSOR_WATFORD} element={<SponsorWatford />} />
			<Route path={ROUTES.SPONSOR_DRAKE} element={<SponsorDrake />} />
			<Route path={ROUTES.SETTINGS} element={<Settings />} />
			<Route
				path={ROUTES.PAY}
				element={<Pay dataBase={dataBase} setDataBase={setDataBase} />}
			/>
		</Routes>
	)
}

export default Router
