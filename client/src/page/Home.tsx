import { PageHOC } from '../components';

const Home = () => {
	return (
		<div>
			<h1 className='text-white text-xl'>Hello from Home</h1>
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
