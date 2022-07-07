import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testtimonial: React.FC = () => {
	return (
		<Carousel>
			<CarouselItem index={0}>
				<Review by='Axel (Showtime)' content='“Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.“' />
			</CarouselItem>
			<CarouselItem index={1}>
				<Review by='Adam Carlton (CEO of Pink Panda)' content="“Margelo is a collection of world class talent, from React Native to website, full stack to design - I've been nothing but pleased with their communication, imagination, insight and delivery.“" />
			</CarouselItem>
			<CarouselItem index={2}>
				<Review by='Alex (CTO of Steakwallet)' content="“The output of Margelo is unlike any other team we've worked with. Their speed, professionalism and familiarity with all things mobile helped turn Steakwallet into the slick application it is known as today.“" />
			</CarouselItem>
			<CarouselItem index={3}>
				<Review by='Clinton (CEO of Slingshot)' content="“When we first found Margelo they seemed too good to be true. Professional, fast and ridiculously talented; the 3D AR Filter component they have developed for our React Native app is super smooth and responsive.“" />
			</CarouselItem>
			<CarouselItem index={4}>
				<Review by='Clinton (CEO of Slingshot)' content="“Working with the Margelo team feels like a cheat code. When it comes to building performant and scalable React Native mobile apps, they're the best hands down.“" />
			</CarouselItem>
			<CarouselItem index={5}>
				<Review by='Roland (ExtraCard)' content="“We were hitting the inevitable pains of rapid growth and needed to level up our app quickly. What would have taken us months took the Margelo team mere days. There is nothing they can't figure out or make happen. Simply the best.“" />
			</CarouselItem>
		</Carousel>
	)
};

export default Testtimonial;
