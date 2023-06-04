import { useState } from 'react';
import { CustomButton, CustomInput, PageHOC } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
	const { contract, wallerAddress } = useGlobalContext();
	const [playerName, setPlayerName] = useState('');

	return (
		<div className='flex flex-col'>
			<CustomInput
				label='Name'
				placeholder='Enter your player name'
				value={playerName}
				handleValueChange={setPlayerName}
			/>
			<CustomButton title='Register' handleClick={() => {}} restStyles='mt-6' />
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
