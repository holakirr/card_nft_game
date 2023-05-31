import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo, heroImg } from '../assets';
import styles from '../styles';

interface PageHOCProps {
	Component: React.FC;
	title: ReactElement;
	description: ReactElement;
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
						<div className='flex flex-row w-full'>
							<h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
						</div>
						<p className={`${styles.normalText} my-10`}>{description}</p>
						<Component />
					</div>
					<p className={styles.footerText}>Made with ❤️ by Kirill Petunin</p>
				</div>
				<div className='flex flex-1'>
					<img src={heroImg} alt='Hero-img' className='w-full xl:h-full object-cover' />
				</div>
			</div>
		);
	};

export default PageHOC;
