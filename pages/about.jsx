import Footer from '@/components/landingPage/Footer';
import Header from '@/components/landingPage/Header';
import styles from '@/styles/about.module.css';
const About = () => {
	return (
		<>
			<Header />
			<main className={styles.aboutMain}>
				<section>
					<h2>About</h2>
					<p>
						Following a nudge from the Holy Spirit, im doing my best
						to try and continue the beautiful movement at Asbury
						into other colleges and Churches alike.
					</p>
				</section>
				<section className={styles.faqSection}>
					<h2>F.A.Q</h2>
					<ul className={styles.FAQ}>
						<li>Denominations?</li>

						<quote>
							"My prayer is not for them alone. I pray also for
							those who will believe in me through their message,
							that all of them may be one, Father, just as you are
							in me and I am in you. May they also be in us so
							that the world may believe that you have sent me. I
							have given them the glory that you gave me, that
							they may be one as we are one—I in them and you in
							me—so that they may be brought to complete unity.
							Then the world will know that you sent me and have
							loved them even as you have loved me." John 17:20-23
							NIV
						</quote>
						<p>
							So, lets use these events to come together as one.
							Worshipping, praising, singing, and confessing to
							the Lord. New believers should do research to what
							denomination and church they want to pursue, but
							these events should not be held to lure people to a
							specific denomination. Lets just focus on the love
							of God.
						</p>
						<li>Leadership?</li>
						<p>
							This is up to the event cordinator(s) themselves.
							The event posting will have details about the event.
							If there will be sermons, just worship, etc.
						</p>
						<li>Safety?</li>
						<p>
							Just like with any website I encourage you to
							practice being safe. Let people know where you will
							be going, double check addresses, etc.
						</p>
						<li>Cost?</li>
						<p>
							Im doing this for the Lord, so as long as im able,
							this will be free for all.
						</p>
						<li>Goals?</li>
						<p>
							To build a website people can go to find a place to
							praise and worship God. However God wants to use
							this website is all I could ask for.
						</p>
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default About;
