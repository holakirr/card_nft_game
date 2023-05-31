import { PageHOC } from '../components';

const CreateBattle = () => {
	return <div></div>;
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
