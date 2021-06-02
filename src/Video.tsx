import {Composition} from 'remotion';
import {Gradient} from './Gradient';
import {Scene1} from './Scene1';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Main} from './Main';
import {Wrapped} from './Wrapped';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Gradient"
				component={Gradient}
				width={720}
				height={1280}
				durationInFrames={120}
				fps={30}
			/>
			<Composition
				id="Scene1"
				component={Scene1}
				width={720}
				height={1280}
				durationInFrames={250}
				fps={30}
			/>
			<Composition
				id="Wrapped"
				component={Wrapped}
				width={720}
				height={1280}
				durationInFrames={250}
				fps={30}
			/>
			<Composition
				id="Scene2"
				component={Scene2}
				width={720}
				height={1280}
				durationInFrames={250}
				fps={30}
			/>
			<Composition
				id="Scene3"
				component={Scene3}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'All I Talk Is Money',
					topSongArtistName: 'Albusta'
				}}
			/>
			<Composition
				id="Main"
				component={Main}
				width={720}
				height={1280}
				durationInFrames={360 + 210}
				fps={30}
			/>
		</>
	);
};
