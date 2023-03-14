import styles from '@/components/accountCreation/loginBox.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
const LoginBox = () => {
	const router = useRouter();

	const [loginInputs, setLoginInputs] = useState({
		email: '',
		password: '',
	});

	function handleChange(e) {
		const name = e.target.name;

		// Use this if you need to get value of a checked value
		// const value =
		// 	evt.target.type === 'checkbox'
		// 		? evt.target.checked
		// 		: evt.target.value;

		const value = e.target.value;
		setLoginInputs({
			...loginInputs,
			[name]: value,
		});
	}

	return (
		<>
			<section className={styles.loginBox}>
				<form action="" className={styles.loginForm}>
					<div>
						<label htmlFor="">Email*</label>
						<input
							required
							type="text"
							name="email"
							placeholder="Enter your Email"
							value={loginInputs.email}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="">Password*</label>
						<input
							required
							type="password"
							name="password"
							placeholder="Enter your Password"
							value={loginInputs.password}
							onChange={handleChange}
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
