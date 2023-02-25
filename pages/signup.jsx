import styles from '@/styles/signup.module.css';
import Header from '@/components/landingPage/Header';
import SignupBox from '@/components/accountCreation/SignupBox';
import Link from 'next/link';
const Signup = () => {
	return (
		<>
			<Header />
			<SignupBox />
			<div className={styles.loginRedirect}>
				<Link href="/login">Already have an account? </Link>
			</div>
		</>
	);
};

export default Signup;
