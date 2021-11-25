import Link from 'next/link';
import Heading from '../../components/Heading';
import Logo from '../../components/Logo';
import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>
        <a href="maito:sac@wongames.com">sac@wongames.com</a>
        <a href="maito:sac@wongames.com">(98) 99999-9999</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="http://" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="http://" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
          <a href="http://" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
          <a href="http://" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem Ipsum dolor sit.</span>
        <span>Lorem Ipsum dolor sit.</span>
        <span>Lorem Ipsum dolor sit.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games - All rights reserveds</S.Copyright>
  </S.Wrapper>
);

export default Footer;
