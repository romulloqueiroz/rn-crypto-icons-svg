import {
  Svg,
  Path,
  LinearGradient,
  Stop,
  Defs,
  Mask,
  Polygon,
} from 'react-native-svg';
import { assets } from './assets';
import type { Asset, AssetKey } from './assets';
import { getHexagonPoints, getOctagonPoints, getSquarePoints } from './utils';
import React from 'react';

export interface IconProps {
  name: AssetKey;
  size: number;
  shape?: 'hexagonal' | 'octagonal' | 'square' | 'circular';
}

const Crypto: React.FC<IconProps> = ({
  name = 'btc',
  size = 24,
  shape = 'circular',
}) => {
  const { viewBox, paths } = assets[name as AssetKey];
  if (!paths) return null;

  const hexagonPoints = getHexagonPoints(viewBox);
  const octagonPoints = getOctagonPoints(viewBox);
  const squarePoints = getSquarePoints(viewBox);

  let maskId: string | undefined;
  let maskPoints: string = '';

  switch (shape) {
    case 'hexagonal':
      maskId = 'hexagonMask';
      maskPoints = hexagonPoints;
      break;
    case 'octagonal':
      maskId = 'octagonMask';
      maskPoints = octagonPoints;
      break;
    case 'square':
      maskId = 'squareMask';
      maskPoints = squarePoints;
      break;
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      fill="none"
    >
      <Defs>
        {maskId && (
          <Mask id={maskId}>
            <Polygon points={maskPoints} fill="white" />
          </Mask>
        )}
        {paths.map((item: Asset, idx: number) => {
          if (item.gradient) {
            return (
              <LinearGradient
                key={`gradient${idx}`}
                id={`gradient${idx}`}
                x1={item.gradient.x1 / viewBox}
                y1={item.gradient.y1 / viewBox}
                x2={item.gradient.x2 / viewBox}
                y2={item.gradient.y2 / viewBox}
              >
                {item.gradient.stops.map((stop, stopIdx) => (
                  <Stop
                    key={stopIdx}
                    stopColor={stop.color}
                    offset={stop.offset || '0'}
                  />
                ))}
              </LinearGradient>
            );
          } else return null;
        })}
      </Defs>
      {paths.map((item: Asset, idx: number) => (
        <Path
          key={idx}
          d={item.path}
          fill={item.gradient ? `url(#gradient${idx})` : item.fill}
          opacity={item.opacity || 1}
          fillRule="evenodd"
          clipRule="evenodd"
          mask={maskId ? `url(#${maskId})` : undefined}
        />
      ))}
    </Svg>
  );
};

export default Crypto;
