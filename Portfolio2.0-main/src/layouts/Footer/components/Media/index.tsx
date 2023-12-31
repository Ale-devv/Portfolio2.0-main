import SocialMediaBox from "../../../../components/SocialBox";
import * as S from "../../style";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";

const Media = () => {
    return (
        <S.SocialMediaContainer>
            <div>
                <S.Title>E-mail para contato</S.Title>
                <S.Text>ale5508@hotmail.com</S.Text>
            </div>
            <div>
                <S.Title>Adicione nas redes</S.Title>
                <S.LinksContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.linkedin.com/in/alisson-oliveira-855820252/">
                            <Linkedin />
                        </SocialMediaBox>
                        <div>/Alisson-Oliveira</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://github.com/Ale-devv">
                            <GitHub />
                        </SocialMediaBox>
                        <div>/Ale-devv</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                    </S.MediaContainer>
                </S.LinksContainer>
            </div>
        </S.SocialMediaContainer>
    );
};

export default Media;
