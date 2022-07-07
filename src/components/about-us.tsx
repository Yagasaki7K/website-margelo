import "../styles/about-us.scss";
import Member from "./member";

const AboutUs: React.FC = () => {

	return (
		<section className="container">
			<div>
				<div className="container-quote">
					<p className="container-quote__paragraph">
						<strong>We will help you building better apps, faster and like a GAMER. </strong>
						Our team of expert developers and open source volunteers created the best user experiences in some of the most popular apps in the world. And we are building solutions through the web for society. Uniting creativity, open source and solutions.
					</p>
				</div>
			</div>
			<div className="ourteam">
				<h2 className="ourteam__title">Kalify Crew</h2>
				<div className="ourteam__sub-title">Devs who helped us</div>
			</div>
			<div className="members">
				<Member
					name="Anderson Marlon"
					socialId="@Yagasaki7K"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_marc.svg"
				/>
				<Member
					name="Anderson"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_szymon.svg"
				/>
				<Member
					name="Marlon"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_thomas.svg"
				/>
				<Member
					name="Tomaz"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_christoph.svg"
				/>
				<Member
					name="Alves"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_janic.svg"
				/>
				<Member
					name="Catalins"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_catalin.svg"
				/>
				<Member
					name="Himura"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_mo.svg"
				/>
				<Member
					name="Yasakani"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_eric.svg"
				/>
				<Member
					name="Katsuragi"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_matei.svg"
				/>
				<Member
					name="Helena"
					socialId="@Yagasaki7k"
					link="https://github.com/Yagasaki7K"
					linkStaticImage="/Margelo/assets/margelo_faces_viktoria.svg"
				/>
			</div>
		</section>
	);
};

export default AboutUs;
