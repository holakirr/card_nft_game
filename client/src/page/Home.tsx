import { useState } from 'react';
import { CustomButton, CustomInput, PageHOC } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
	const { contract, wallerAddress, setShowAlert } = useGlobalContext();
	const [playerName, setPlayerName] = useState('');

	const handleClick = async () => {
		try {
			if (!contract || !wallerAddress) throw new Error('Contract or wallet address not found');
			const playerExists = await contract.isPlayer(wallerAddress);
			if (!playerExists) {
				await contract.registerPlayer(playerName, playerName);
				setShowAlert({
					status: true,
					type: 'info',
					message: `${playerName} has been registered successfully`,
				});
			}
		} catch (error) {
			setShowAlert({
				status: true,
				type: 'error',
				message: (error as string) || '',
			});
		}
	};

	return (
		<div className='flex flex-col'>
			<CustomInput
				label='Name'
				placeholder='Enter your player name'
				value={playerName}
				handleValueChange={setPlayerName}
			/>
			<CustomButton title='Register' handleClick={handleClick} restStyles='mt-6' />
		</div>
	);
};

export default PageHOC({
	Component: Home,
	title: (
		<>
			Welcome to Avax Gods <br /> a Web3 NFT Card Game
		</>
	),
	description: (
		<>
			Connect your wallet to start playing <br /> the ultimate Web3 Battle Card Game
		</>
	),
});
