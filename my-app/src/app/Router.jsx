import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
	Home,
	SponsorEverton,
	SponsorWatford,
	SponsorDrake,
	Settings,
	Pay,
	Withdraw,
	Promotion,
	Recent
} from 'pages'

import { ROUTES } from 'shared/consts'

function Router({ showRegModal, setShowRegModal, isNavBarOpen }) {
	return (
		<Routes>
			<Route
				path={ROUTES.HOME}
				element={
					<Home
						showRegModal={showRegModal}
						setShowRegModal={setShowRegModal}
						isNavBarOpen={isNavBarOpen}
					/>
				}
			/>
			<Route path={ROUTES.SPONSOR_EVERTON} element={<SponsorEverton />} />
			<Route path={ROUTES.SPONSOR_WATFORD} element={<SponsorWatford />} />
			<Route path={ROUTES.SPONSOR_DRAKE} element={<SponsorDrake />} />
			<Route path={ROUTES.SETTINGS} element={<Settings />} />
			<Route path={ROUTES.PROMOTION} element={<Promotion />} />
			<Route path={ROUTES.PAY} element={<Pay />} />
			<Route path={ROUTES.WITHDRAW} element={<Withdraw />} />
			<Route path={ROUTES.RECENT} element={<Recent />} />
		</Routes>
	)
}

export default Router
