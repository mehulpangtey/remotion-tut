import {Sequence} from 'remotion';
import {Scene1} from './Scene1';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';

export const Main: React.FC<{
  topSongName: string;
  topSongArtistName: string;
  ranking: [string, string, string, string, string];

}> = ({topSongName, topSongArtistName, ranking}) => {
  return (
	<>
		<Sequence from={0} durationInFrames={210}>
			<Scene1/>
		</Sequence>
		<Sequence from={210} durationInFrames={210}>
			<Scene2 ranking={ranking}/>
		</Sequence>
		<Sequence from={420} durationInFrames={150}>
			<Scene3 topSongName={topSongName} topSongArtistName={topSongArtistName} />
		</Sequence>
		
	</>
  )
}