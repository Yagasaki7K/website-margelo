import MastHead from "./components/masthead";
import AboutUs from "./components/about-us";
import Skills from "./components/skills";
import Works from "./components/works";
import LogoClients from "./components/logo-clients";
import LogoClientsBottom from "./components/logo-clients-bottom";
import Testtimonial from "./components/testimonial";
import "./App.scss";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
	return (
		<div className="app">
			<MastHead />
			<AboutUs />
			<Skills />
			<Works />
			<section className="app-trusted">
				<span className="app-trusted__title">
					trusted by the apps on your phone
				</span>
				<LogoClients />
				<LogoClientsBottom />
			</section>
			<section className="app-belive">
				<h3 className="app-belive__title">
					We belive in good communication and a fully transparent development
					process.
				</h3>
			</section>
			<Testtimonial />
			<Contact />
			<Footer />
		</div>
	);
}
export default App;
