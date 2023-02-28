import Header from '@/components/dashboard/Header';
import Main from '@/components/dashboard/Main';
import styles from '@/styles/dashboard.module.css';

const Dashboard = () => {
	return (
		// if user auth === 'admin' allow them to create events
		// else allow them to search/like/follow events
		<>
			<Header />
			<Main />
		</>
	);
};

export default Dashboard;
