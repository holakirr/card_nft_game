import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo, heroImg } from '../assets';
import styles from '../styles';

interface PageHOCProps {
	Component: React.FC;
	title: string;
	description: string;
}

const PageHOC =
	({ Component, title, description }: PageHOCProps) =>
	() => {
		const navigate = useNavigate();

		return (
			<div className={styles.hocContainer}>
				<div className={styles.hocContentBox}>
					<img src={logo} alt='Logo' className={styles.hocLogo} onClick={() => navigate('/')} />

					<div className={styles.hocBodyWrapper}>
						<Component />
					</div>
				</div>
			</div>
		);
	};

export default PageHOC;
