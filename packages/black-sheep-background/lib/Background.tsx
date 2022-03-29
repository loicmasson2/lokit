/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import BackgroundPrimaryLight from '../public/BackgroundPrimaryLight.png';
import BackgroundSecondaryLight from '../public/BackgroundSecondaryLight.png';
import { Box } from './Box'

const backgroundMapping: { [index:string] : string } = {
  primary: BackgroundPrimaryLight,
  secondary: BackgroundSecondaryLight,
};
const Background:React.FC<{id:string, variant:string}> = ({ id, children , variant= "primary"}) => (
  <Box
    css={{
      '@bp1': {
        px: 0
      },
      '@bp2': {
        px: 6
      },
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${backgroundMapping[variant]})`,
      backgroundSize: '100% 40%',
      backgroundPosition: '0 bottom',
      borderRadius: 8,
      width:600,
      height: 400
    }}
  >
    {children}
  </Box>
);

export default Background;

