import styles from '@/components/accountCreation/signupBox.module.css';

const SignupBox = () => {
	return (
		<>
			<section className={styles.signupBox}>
				<form action="" className={styles.signupForm}>
					<div>
						<label htmlFor="">Email*</label>
						<input
							required
							type="email"
							placeholder="Enter your Email"
						/>
					</div>
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
					<div>
						<label htmlFor="">Confirm Password*</label>
						<input
							required
							type="password"
							placeholder="Re-enter Password"
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
