import styles from '@/components/landingPage/main.module.css';
import { FaPrayingHands } from 'react-icons/fa';
import { FaChurch } from 'react-icons/fa';
const Main = () => {
	return (
		<main className={styles.landingMain}>
			<div className={styles.megatron}>
				<h1>Find a Revival</h1>
				<p>
					Craving an Asbury like Revival in your area? Find or create
					an event near you!
				</p>
				<button className={styles.megatronButton}>Signup/Login</button>
			</div>
			<section>
				<h3>Connect</h3>
				<FaPrayingHands className={styles.sectionIcons} />
				<p>
					Find a group of others in your area who want to worship,
					pray, and grow closer to God.
				</p>
			</section>
			<section className={styles.secondSection}>
				<h3>Host</h3>
				<FaChurch className={styles.sectionIcons} />
				<p>
					Do you feel the Holy Spirit urging you to help this movement
					grow? Host a location for others to come and worship God.
				</p>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://en.wikipedia.org/wiki/Christian_revival"
				></a>
			</section>
			<section id="contact" className={styles.contactSection}>
				<h3>Contact Us</h3>
				<form action="">
					<input
						required
						type="text"
						id="name"
						placeholder="Enter your Name"
					/>

					<input
						required
						type="email"
						id="email"
						placeholder="Enter your Email"
					/>

					<textarea
						required
						maxLength={500}
						name="message"
						id="message"
						cols="30"
						rows="10"
						placeholder="Enter your message"
					></textarea>
					<a>
						<button type="submit">Send</button>
					</a>
				</form>
			</section>
		</main>
	);
};

export default Main;
