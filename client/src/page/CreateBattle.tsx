import { PageHOC } from '../components';

const CreateBattle = () => {
	return (
		<div>
			<h1 className='text-white text-xl'>Hello from CreateBattle</h1>
		</div>
	);
};

export default PageHOC({
	Component: CreateBattle,
	title: (
		<>
			Create <br /> a New Battle
		</>
	),
	description: (
		<>
			Create your own battle and <br /> invite your friends to play
		</>
	),
});
