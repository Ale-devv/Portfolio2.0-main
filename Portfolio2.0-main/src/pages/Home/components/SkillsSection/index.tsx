import { useState } from 'react'
import H2 from "../../../../components/H2";
import * as S from "../../style";
import skillJson from "./skills.json";
import SkillRow from "../../../../components/SkillRow";
import habilidades from "./habilidades.json";
import { useToggle } from "../../../../hooks/useToggle";
import { GenericButton } from "../../../../components/generics";
import { useTranslation } from "react-i18next";
const { skills } = skillJson;

const skillList = skills.map(e => (
    <SkillRow
        key={e.name}
        description={e.description}
        name={e.name}
        svg={e.svg}
    />
));

const SkillsSection = () => {
    const { state: seeMore, toggle } = useToggle(false);
    const { t, i18n: {changeLanguage, language} } = useTranslation()

    const [currentLanguage, setCurrentLanguage] = useState ('language')

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en'  ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    // Puxar botão para baixo quando for efetuar a configuração de 2 idiomas futuramente
 // <button type='button' onClick={handleChangeLanguage}> Change Language </button> 

    return (
        <S.Section id="skills" secondary={true}>
            <H2>{t('title')}</H2>
             
            <S.SkillsContainer seeMore={seeMore}>
                <div className="centralizer">{skillList}</div>
                <S.SeeMoreContainer>
                    <GenericButton onClick={toggle}>
                        {!seeMore ? "Ver mais" : "Ver menos"}
                    </GenericButton>
                </S.SeeMoreContainer>
            </S.SkillsContainer>
        </S.Section>
    );
};

export default SkillsSection;
