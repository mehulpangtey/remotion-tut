import {Sequence} from 'remotion'
import {useVideoConfig, AbsoluteFill} from 'remotion';
import { FourFaces } from './FourFaces';
import { Gradient } from "./Gradient"
import { GradientCircle } from './GradientCircle';
import weeknd from './weeknd.jpeg';
import roots from './roots.jpeg';
import maryjblige from './maryjblige.jpeg';
import samsmith from './samsmith.jpeg';
import {Wrapped} from './Wrapped';

export const Scene1: React.FC = () => {
  const {height} = useVideoConfig();
  return (
	<AbsoluteFill>
		<Gradient height={height} />
		<FourFaces image={weeknd}/>
		<Sequence durationInFrames={Infinity} from={30}>
			<FourFaces image={maryjblige}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={60}>
			<FourFaces image={roots}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={90}>
			<FourFaces image={samsmith}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={120}>
			<GradientCircle />
		</Sequence>
		<Sequence durationInFrames={Infinity} from={140}>
			<Wrapped />
		</Sequence>
	</AbsoluteFill>
  )
}