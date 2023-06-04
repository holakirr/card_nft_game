import styles from '../styles';

const regex = /^[A-Za-z0-9 ]+$/;

interface CustomInputProps {
	label: string;
	placeholder: string;
	value: string;
	handleValueChange: (value: string) => void;
}

const CustomInput = ({ label, placeholder, value, handleValueChange }: CustomInputProps) => {
	return (
		<>
			<label htmlFor='name' className={styles.label}>
				{label}
			</label>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={e => {
					if (e.target.value === '' || regex.test(e.target.value)) handleValueChange(e.target.value);
				}}
				className={styles.input}
			/>
		</>
	);
};

export default CustomInput;
