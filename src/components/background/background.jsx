import compressedVideo from '../../assets/images/compressed_video.mp4';



import './background.css'
const Background = ({playStatus, heroCount}) => {
    if(playStatus){
        return (
            <video className='background' autoPlay loop muted>
                <source src={compressedVideo} type="video/mp4" />
            </video>
        )
    }
    else if(heroCount === 0){
        return  <img src={image1} className='background' alt=""/>
        
        
}
else if(heroCount === 1){
    return <img src={image2} className='background' alt=""/>
    

}

}
export default Background