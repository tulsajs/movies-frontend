import styled from 'react-emotion';
import { Flex as F, Box as B } from 'grid-styled/emotion';
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
  textAlign,
  position,
  top,
  right,
  bottom,
  left,
  borders,
  borderRadius
} from 'styled-system';

export const Box = styled(B)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${position}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${textAlign}
  ${borders}
  ${borderRadius}
`;

export const Text = styled('div')`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${textAlign}
`;

export const Input = styled('input')`
  ${width}
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${textAlign}
`;

export const Flex = F;
