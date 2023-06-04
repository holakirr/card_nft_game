import { ethers } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react';
import { ABI, ADDRESS } from '../contract';
import Web3Modal from 'web3modal';

interface GlobalContextType {
	contract: ethers.Contract | undefined;
	wallerAddress: string;
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [wallerAddress, setWalletAddress] = useState('');
	const [provider, setProvider] = useState<ethers.BrowserProvider>();
	const [contract, setContract] = useState<ethers.Contract>();

	//* Set the wallet address to the state
	const updateCurrentWalletAddress = async (address: string) => {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

		if (accounts) setWalletAddress(accounts[0]);
	};

	useEffect(() => {
		if (window.ethereum) {
			updateCurrentWalletAddress(wallerAddress);

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

	return (
		<GlobalContext.Provider
			value={{
				contract,
				wallerAddress,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
