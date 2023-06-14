import styles from '../styles';

interface CustomButtonProps {
	title: string;
	handleClick: () => void;
	restStyles?: string;
}

const CustomButton = ({ title, handleClick, restStyles }: CustomButtonProps) => {
	return (
		<button onClick={handleClick} className={`${styles.btn} ${restStyles}`}>
			{title}
		</button>
	);
};

export default CustomButton;
