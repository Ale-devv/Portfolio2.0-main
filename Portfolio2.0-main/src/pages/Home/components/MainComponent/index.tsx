import * as S from "../../style";
import { useRef, useState, useEffect } from "react";
import SocialMediaBox from "../../../../components/SocialBox";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import MainLogo from "../../../../assets/svgComponents/MainLogo";
import { typingFunction } from "./functions";
import Particle from "../ParticlesComponent/Particle";

interface MainComponentContract {
    isMobile: boolean;
}

const MainComponent = ({ isMobile }: MainComponentContract) => {
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const ref = useRef<HTMLParagraphElement>(null);
    const occupation: string = "Desenvolvedor Web";

    useEffect(() => {
        if (
            !isInitial &&
            ref!.current!.innerHTML.length !== occupation.length
        ) {
            typingFunction(ref!.current!, occupation);
            return;
        }
        setIsInitial(false);
    }, [isInitial]);

    return (
        <S.Main id="start">
            
            
            <div className={`${!isInitial ? "animeLeft" : ""} `}>
                <S.MainContentContainer><Particle />
                    <div className="nameLogoContainer">
                        <S.MyInfoContainer>
                            
                            <S.Name>Alisson Oliveira</S.Name>
                            <S.Occupation ref={ref}></S.Occupation>
                            <S.SocialMediaContainer>
                                <SocialMediaBox url="https://www.linkedin.com/in/alisson-oliveira-855820252/">
                                    <Linkedin />
                                </SocialMediaBox>
                                <SocialMediaBox url="https://github.com/Ale-devv">
                                    <GitHub />
                                </SocialMediaBox>
                            </S.SocialMediaContainer>
                        </S.MyInfoContainer>
                        {!isMobile && (
                            <S.MainImgContainer>
                                <MainLogo />
                            </S.MainImgContainer>
                        )}
                    </div>
                </S.MainContentContainer>
            </div>
        </S.Main>
    );
};

export default MainComponent;
