import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export const Player = ({data, index, setIndex}) => (
  <AudioPlayer
  style={{ 
      position: 'sticky',
      bottom: 0,
  }}
    autoPlay
    src={ data[index]?.url}
    showSkipControls="true"
    header= {data[index]?.song}
    onPlay={e => console.log("onPlay")}
    onClickPrevious={$=> setIndex(index-1)}
    onClickNext={$=> setIndex(index+1)}
    footer=  {data[index]?.artists.split(",").join(" & ")}
    // other props here
  />
);