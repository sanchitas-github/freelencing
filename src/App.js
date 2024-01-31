// // import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk';
// import React, { useEffect, useState } from 'react';

// import './App.css';
// import logo from './assets/logo.svg';
// import Connect from './components/Connect';
// // import loadingLogo from './assets/loading-logo.svg';
// // import useAeternitySDK from './hooks/useAeternitySDK';
// // import network from "./configs/network";

// const App = () => {
// 	// const { aeSdk, address, networkId, connectToWallet } = useAeternitySDK();
// 	// const [balance, setBalance] = useState('loading...');
// 	// const [isLoading, setIsLoading] = useState<boolean>(false);
// 	// const [message, setMessage] = useState<string | undefined>();

// 	// useEffect(() => {
// 	// 	(async () => {
// 	// 		setIsLoading(true);
// 	// 		setMessage('Searching for Wallet ...');
// 	// 		try {
// 	// 			await connectToWallet();
// 	// 			setMessage(undefined);
// 	// 		} catch (error) {
// 	// 			if (!(error instanceof Error)) throw error;
// 	// 			setMessage(error.message);
// 	// 		} finally {
// 	// 			setIsLoading(false);
// 	// 		}
// 	// 	})();
// 	// }, [connectToWallet]);

// 	// useEffect(() => {
// 	// 	(async () => {
// 	// 		if (networkId == null || address == null) return;

// 	// 		if (networkId !== network.id) {
// 	// 			setMessage(`Current network "${networkId}" is not supported. Please switch network in the wallet.`);
// 	// 			return;
// 	// 		}
// 	// 		setMessage(undefined);
			
// 	// 		const _balance = await aeSdk.getBalance(address, { format: AE_AMOUNT_FORMATS.AE });
// 	// 		setBalance(_balance);
// 	// 	})();
// 	// }, [aeSdk, networkId, address]);

// 	return (
// 		<>
// 		<Connect></Connect>

		
// 		</>
// 		// <div className="App">
// 		// 	<header className="App-header">
// 		// 		<div>
// 		// 			<img src={isLoading ? loadingLogo : logo} alt="logo" />
// 		// 			{message
// 		// 				? <h6>{message}</h6>
// 		// 				: <React.Fragment>
// 		// 					<h6>Account: {address}</h6>
// 		// 					<h6>Balance: {balance}</h6>
// 		// 					<h6>Connected to wallet on network "{networkId}"</h6>
// 		// 				</React.Fragment>
// 		// 			}
// 		// 		</div>
// 		// 	</header>
// 		// </div>
// 	);
// };

// export default App;



// ---
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Connect from "./components/Connect";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
