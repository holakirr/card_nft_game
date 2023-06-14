import { ethers } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react';
import { ABI, ADDRESS } from '../contract';
import Web3Modal from 'web3modal';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface Alert {
	status: boolean;
	type: AlertType;
	message: string;
}

interface GlobalContextType {
	contract: ethers.Contract | undefined;
	wallerAddress: string;
	showAlert: Alert;
	setShowAlert: React.Dispatch<GlobalContextType['showAlert']>;
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [wallerAddress, setWalletAddress] = useState('');
	const [provider, setProvider] = useState<ethers.BrowserProvider>();
	const [contract, setContract] = useState<ethers.Contract>();
	const [showAlert, setShowAlert] = useState<Alert>({ status: false, type: 'info', message: '' });

	//* Set the wallet address to the state
	const updateCurrentWalletAddress = async () => {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

		if (accounts) setWalletAddress(accounts[0]);
	};

	useEffect(() => {
		if (window.ethereum) {
			updateCurrentWalletAddress();

			window.ethereum.on('accountsChanged', updateCurrentWalletAddress);
		} else {
			console.log('No ethereum wallet detected');
		}
	}, [wallerAddress]);

	//* Set the smart contract and provider to the state
	useEffect(() => {
		const setSmartContractAndProvider = async () => {
			const web3Modal = new Web3Modal();
			const connection = await web3Modal.connect();
			const newProvider = new ethers.BrowserProvider(connection);
			const signer = await newProvider.getSigner();
			const newContract = new ethers.Contract(ADDRESS, ABI, signer);

			setProvider(newProvider);
			setContract(newContract);
		};
		setSmartContractAndProvider();
	}, []);

	useEffect(() => {
		if (showAlert) {
			const timer = setTimeout(() => {
				setShowAlert({ status: false, type: 'info', message: '' });
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [showAlert]);

	return (
		<GlobalContext.Provider
			value={{
				contract,
				wallerAddress,
				showAlert,
				setShowAlert,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
