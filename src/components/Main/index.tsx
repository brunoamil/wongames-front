import * as S from './styles';

const Main = ({
  title = 'React',
  description = 'TypeScript, React, NextJS, Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.png" alt="Logo oficial do NEXTJS" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
