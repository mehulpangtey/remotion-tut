import {Img, interpolate, useCurrentFrame} from 'remotion'
import { AbsoluteFill } from "remotion"

export const ScalingFace: React.FC<{

  image: string;


}> = ({image}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [1, 120], [0, 1], {
    extrapolateRight: `clamp`,
  });
  const scale = interpolate(progress, [0, 1], [1.2, 1.3]);
  const translateX = interpolate(progress, [0, 1], [0, 30]);
  return (
	<AbsoluteFill style={{
    overflow: 'hidden',
	}}
	>
		<Img 
			src={image} 
			style={{
        position: 'absolute',
        height: '100%',
        left: '-50%',
        transform: `scale(${scale}) translateX(${translateX}px)`,
			}}/>
	</AbsoluteFill>
  )
}