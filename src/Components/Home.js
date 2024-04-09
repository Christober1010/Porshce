import React, { useState } from 'react'
import './home.css'
import pic1 from '../Assets/bro-takes-photos-fKNPmWPtESI-unsplash.jpg'
import pic2 from '../Assets/campbell-3ZUsNJhi_Ik-unsplash (1).jpg'
import pic3 from '../Assets/redcharlie-mugDbuNnbd0-unsplash.jpg'
import pic4 from '../Assets/redcharlie-vQVWIsIBafA-unsplash.jpg'
import video from '../Assets/video.mp4'

function Home() {
    const [count, setCount] = useState(0)
    const [showVideo, setShowVideo] = useState(false)

    var pic = null;

    if (count === 0) {
        pic = pic4
    }
    else if (count === 1) {
        pic = pic2
    }
    else if (count === 2) {
        pic = pic3
    }
    else if (count === 3) {
        pic = pic1
    }

    const textData = [
        { text1: "Dive Into", text2: "Your Dream" },
        { text1: "Get Your", text2: "Porsche Now" },
        { text1: "Drop a Gear", text2: "And Disapper" },
        { text1: "Let the Adventure", text2: "Begin" },
    ]

    return (
        <div className='home'>
            <div className='pic-wrapper'>
                {showVideo ? <video src={video} autoPlay ></video> : 
                <div>
                    <img src={pic} className='pics' />
                    <div className='texts text-center'>
                        <p className='text-1'>{textData[count].text1}</p>
                         <p className='text-2'>{textData[count].text2}</p>
                     </div>
                </div>}


            </div>


            <div className='dots'>
                <div onClick={() => setCount(0)}><i className={`fa fa-circle ${count === 0 ? 'text-primary' : "text-light"}`}></i></div>
                <div onClick={() => setCount(1)}><i className={`fa fa-circle ${count === 1 ? 'text-primary' : "text-light"}`}></i></div>
                <div onClick={() => setShowVideo(!showVideo)}><i className={`fa ${showVideo ? 'fa-pause text-warning' : 'fa-play text-warning'}`}></i></div>
                <div onClick={() => setCount(2)}><i className={`fa fa-circle ${count === 2 ? 'text-primary' : "text-light"}`}></i></div>
                <div onClick={() => setCount(3)}><i className={`fa fa-circle ${count === 3 ? 'text-primary' : "text-light"}`}></i></div>
            </div>
        </div>
    )
}

export default Home