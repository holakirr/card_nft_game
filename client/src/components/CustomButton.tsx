interface CustomButtonProps {
	title: string;
	handleClick: () => void;
	restStyles?: string;
}

const CustomButton = ({ title, handleClick, restStyles }: CustomButtonProps) => {
	return <div>{title}</div>;
};

export default CustomButton;
