
import './Library.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Header/Footer/Footer';
import Banner from '../../Components/Header/Banner/Banner';

import Documents from '../../Components/Header/Documents/Documents';



const Library = () => {
	
	return (
		<div className = 'Library'>
			<Header />
			<Banner title='LISAM-Library' image='/assets/imgs/study.jpg' />
			<h1>Publications / Library</h1>
			<div className='Library__details'>
				<Documents />
			</div>
			<Footer />
		</div>
	)
}

export default Library;
