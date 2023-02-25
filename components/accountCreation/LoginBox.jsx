import styles from '@/components/accountCreation/loginBox.module.css';
import { useRouter } from 'next/router';
const LoginBox = () => {
	const router = useRouter();
	return (
		<>
			<section className={styles.loginBox}>
				<form action="" className={styles.loginForm}>
					<div>
						<label htmlFor="">Username*</label>
						<input
							required
							type="text"
							placeholder="Enter your Username"
						/>
					</div>
					<div>
						<label htmlFor="">Password*</label>
						<input
							required
							type="password"
							placeholder="Enter your Password"
						/>
					</div>
					<div className={styles.loginButtonContainer}>
						<button
							type="submit"
							onClick={() => {
								router.push('/auth/dashboard');
							}}
						>
							Login
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default LoginBox;
