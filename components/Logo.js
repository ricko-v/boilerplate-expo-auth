import {Image} from 'react-native';
import image from '../constant/image';

export default function Logo({ width, height }) {
  return (
    <Image source={image.logo} style={{ width: width, height: height }} />
  );
}