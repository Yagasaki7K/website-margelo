import React from "react";
import SliderContainer from "./slider";
import "../styles/logo-clients.scss";

const LogoClients: React.FC = () => {
	return (
		<SliderContainer initalOffsetX={0} contentWidth={1759}>
			<div className="logo-container">
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="shopify" />
				</div>
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="coinbase" />
				</div>
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="rainbow" />
				</div>
				<div className="logo-container__item">
					<img
						src="https://webessentials.com.br/Logo.png"
						alt="walletconnect"
					/>
				</div>
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="exodus" />
				</div>
				<div className="logo-container__item logo-container__item-modified">
					<img src="https://webessentials.com.br/Logo.png" alt="picnic" />
				</div>
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="status" />
				</div>
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="extra" />
				</div>
				<div className="logo-container__item">
					<img src="https://webessentials.com.br/Logo.png" alt="stori" />
				</div>
			</div>
		</SliderContainer>
	);
};

export default LogoClients;
