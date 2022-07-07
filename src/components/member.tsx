import React from "react";
import "../styles/member.scss";

interface Props {
	id?: string;
	name: string;
	socialId: string;
	link: string;
	linkStaticImage: string;
}

const Member: React.FC<Props> = ({ name, socialId, link, linkStaticImage }) => {
	return (
		<div className="center">
			<div className="member">
				<img
					className="member__image"
					loading="lazy"
					src={linkStaticImage}
					alt="member"
				/>
				<div className="member__name">{name}</div>
				<div className="member__link">
					<a href={link}>
						<span>{socialId}</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Member;
