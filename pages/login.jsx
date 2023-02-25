import styles from '@/styles/login.module.css';
import Header from '@/components/landingPage/Header';
import LoginBox from '@/components/accountCreation/LoginBox';
import Link from 'next/link';

const Login = () => {
	return (
		<>
			<Header />
			<LoginBox />
			<div className={styles.signupRedirect}>
				<Link href="/signup">Need to create an account?</Link>
			</div>
		</>
	);
};

export default Login;
