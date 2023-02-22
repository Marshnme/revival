import styles from '@/components/landingPage/main.module.css';

const Main = () => {
	return (
		<main className={styles.landingMain}>
			<div className={styles.megatron}>
				<h1>Find a Revival</h1>
			</div>
			<section>
				<h3>Our Mission</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Fugit doloremque error distinctio porro praesentium, hic ad
					dolorem rem quibusdam omnis?
				</p>
			</section>
			<section>
				<h3>History of Revivals</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illo sit in possimus modi mollitia praesentium obcaecati
					assumenda cupiditate culpa alias!
				</p>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://en.wikipedia.org/wiki/Christian_revival"
				>
					<button>More Info</button>
				</a>
			</section>
			<section>
				<h3>Contact Us</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur error dicta commodi cupiditate, earum totam. Ab
					maiores ullam voluptas ratione?
				</p>
				<a>
					<button>Contact</button>
				</a>
			</section>
		</main>
	);
};

export default Main;
