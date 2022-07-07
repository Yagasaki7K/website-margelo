import React from "react";
import SliderContainer from "./slider";
import "../styles/logo-clients.scss";

const LogoClientsBottom: React.FC = () => {
    return (
        <SliderContainer initalOffsetX={80} contentWidth={1759} marginTop={24}>
            <div className="logo-container logo-container-bottom">
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="slingshot" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="showtime" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="steakwallet" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="expensify" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="pinkpanda" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="litentry" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="scribeware" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="snapcalorie" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="tocsen" />
                </div>
                <div className="logo-container__item">
                    <img src="https://webessentials.com.br/Logo.png" alt="audubon" />
                </div>
            </div>
        </SliderContainer>
    );
};

export default LogoClientsBottom;
