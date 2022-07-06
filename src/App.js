import './Styles/App.scss';
import Header from './Components/Header';
import Main from './Components/Content/Main';
import Footer from './Components/Footer';

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}


export default App;


