import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineColor?: LineColors;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
};

const Heading = ({
  children,
  color = 'white',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false,
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
