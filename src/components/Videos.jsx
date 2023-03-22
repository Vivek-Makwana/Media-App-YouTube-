import {Stack, Box} from '@mui/material'
// import ChannelCard from './ChannelCard';
// import VideoCard from './VideoCard';
import {VideoCard, ChannelCard } from './';


const Videos = ({videos, direction}) => {
  if(!videos?.length) return <div style={{color:'white'}}>Loding...</div>;
  return (
    <Stack direction ={direction || 'row'} flexWrap='wrap' justifyContent="start" gap={2} >
    {videos.map((item,idx)=>(
      <Box key={idx}>
        {item.id.videoId &&<VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channelDetail={item}/>}
      </Box>
    ))}
    </Stack>
  )
}

export default Videos;