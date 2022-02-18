import "./App.css";
import HeaderBar from "./Components/Header/HeaderBar";
import Slideshow from "./Components/SlideShow/Slideshow";
import ListIcon from "./Components/ListIcon/ListIcon";
import Description from "./Components/Description/description";
import BlackPart from "./Components/BlackPart/BlackPart";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<div className="cont-1">
				<HeaderBar />

				{/*Image Carousel  */}
				<Slideshow />

				<div className="heroTxt"> Inspire-se com grandes empreendedores </div>

				{/*List of Icons  */}
				<ListIcon />

				{/*LandPage Description  */}
				<Description />

				{/*black thing  */}
				<BlackPart />

				{/*Footer  */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
