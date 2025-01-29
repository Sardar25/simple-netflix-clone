import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'




const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt='' className='caption-img'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate praesentium deleniti quibusdam fugit accusamus alias officiis maxime, autem exercitationem error ratione ut! Dicta iure voluptatibus fugit consequuntur eius ex natus eligendi officia alias quas.</p>
                <div className="hero-btns">
                    <button >
                        <img src={play_icon} alt="" /> Play
                    </button>
                    <button className='dark-btn'>
                        <img src={info_icon} alt="" /> info
                    </button>
                </div>
                <TitleCard/>
            </div>
        </div>
        <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={'popular'}/>
        <TitleCard title={"New Movies"}  category={'top_rated'}/>
        <TitleCard title={"Featured Movies"} category={'upcoming'}/>
        <TitleCard title={"Netflix Special"}/>

        </div>

        <Footer/>
    </div>
  )
}

export default Home