import React from "react";
import Sidbar from "../component/sidbar";
import image1 from '../component/image/My-image.jpeg'
import img2 from '../component/image/My-image.jpeg'
import Post from "../component/cards";
import { Image } from 'antd';
import Navbar from "../component/navbar";
import imag1 from '../component/image/imag-3.jpg'
import imag2 from '../component/image/imag-1.jpg'


function Home() {

    let data = [
        {
            img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd7f398e55d3b9ae9/6154d3bc1229791a01f39308/f6ddae6985c45daafaf967c8c8710153ed49fece.jpg',
            para_one: 'Ronaldo',
            para_two: 'Suggested for you',
            button: 'Follow',

        },
       
        {
            img: 'https://cdn.vox-cdn.com/thumbor/AGZ-hZ-dQ54siVDYt0YesLObwFo=/0x0:4500x2999/1200x800/filters:focal(1877x847:2597x1567)/cdn.vox-cdn.com/uploads/chorus_image/image/69643926/1318341815.0.jpg',
            para_one: 'Leo messi',
            para_two: 'Suggested for you',
            button: 'Follow',

        },
        {
            img: 'https://play-lh.googleusercontent.com/Yf8fDwPbVm4zKyfvvwDmqQk56lBQxWq-WviEcGvg90wwxey3_pirYjyNkh1ege-zgtM',
            para_one: 'Musharib_khan',
            para_two: 'Suggested for you',
            button: 'Follow',
        },
        {
            img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80',
            para_one: 'Waseem khan02',
            para_two: 'Suggested for you',
            button: 'Follow',
        },
        {
            img: 'https://mobimg.b-cdn.net/v3/fetch/09/09b943cff7484685cb2d981348bdd75f.jpeg',
            para_one: 'Zain',
            para_two: 'Suggested for you',
            button: 'Follow',
        },
   
    ]

    let Story = [
        {
            image: image1,
            para: 'ahmed..'
        },
        {
            image: imag2,
            para: 'Sheikh..',
        },
        {
            image: image1,
            para: 'musharib..',
        },
        {
            image:imag1,
            para: 'Zain....',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: 'Umair..',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: 'Rehsan..',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: 'Ayan..',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: 'Ali..',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: '',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: '',
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: ''
        },
        {
            image: 'https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg',
            para: ''
        }
    ]

    return (
        <>
            <div className="">
                <Sidbar />

            </div>
            <div className='main_container'>
                <div className='main_section'>
                    <div className='main_post_section'>
                        <Navbar />
                        <div className='stroy'>
                            {
                                Story.map((v, i) => {
                                    return (
                                        <div className='stories_div'><img className='stories' src={v.image} />
                                            <p className='story_para'>{v.para}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="card_main">
                            <Post />

                        </div>



                    </div>
                    <div className='profile_section'>
                        <div className='profile_info'>
                            <img className='profile_photo' src={img2} alt='' />
                            <div className='profile_data'>
                                <p>ahmedsheikh825</p>
                                <p>Ahmed Sheikh😎</p>
                            </div>
                            <div className='profile_data'><a>switch</a></div>
                        </div>
                        <div className='Suggestion_div'>
                            <div className='Suggestion_text'><p>Suggestions For You</p></div>
                            <div className='See_all'><p>See All</p></div>
                        </div>

                        {
                            data.map((v, i) => {
                                return (
                                    <div className='suggestion_info'>
                                        <img className='suggestion_photo' src={v.img} alt='' />
                                        <div className='suggestion_data'>
                                            <p>{v.para_one}</p>
                                            <p className='suggestion_para'>{v.para_two}</p>
                                        </div>
                                        <div className='suggestion_follow'><a>{v.button}</a></div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default Home;