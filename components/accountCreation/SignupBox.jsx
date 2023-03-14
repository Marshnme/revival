import styles from '@/components/accountCreation/signupBox.module.css';
import { useState } from 'react';
const SignupBox = () => {
	const [signUpInputs, setSignUpInputs] = useState({
		email: '',
		username: '',
		password: '',
		confirmPass: '',
	});

	function handleChange(e) {
		const name = e.target.name;

		// Use this if you need to get value of a checked value
		// const value =
		// 	evt.target.type === 'checkbox'
		// 		? evt.target.checked
		// 		: evt.target.value;

		const value = e.target.value;
		setSignUpInputs({
			...signUpInputs,
			[name]: value,
		});
	}

	return (
		<>
			<section className={styles.signupBox}>
				<form action="" className={styles.signupForm}>
					<div>
						<label htmlFor="">Email*</label>
						<input
							required
							name="email"
							type="email"
							placeholder="Enter your Email"
							value={signUpInputs.email}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="">Username*</label>
						<input
							required
							name="username"
							type="text"
							placeholder="Enter your Username"
							value={signUpInputs.username}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="">Password*</label>
						<input
							required
							name="password"
							type="password"
							placeholder="Enter your Password"
							value={signUpInputs.password}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="">Confirm Password*</label>
						<input
							required
							name="confirmPass"
							type="password"
							placeholder="Re-enter Password"
							value={signUpInputs.confirmPass}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.signupButtonContainer}>
						<button type="submit">Signup</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default SignupBox;
