import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import s from './ImageGallery.module.css'

export const ImageGallery = () => {
    return <AwesomeSlider className={`${s.slider} ${s.element}`}>
        <div><img src='https://wallpaper.dog/large/20367297.jpg' alt='prospect'/></div>
        <div><img src='https://wallpaperaccess.com/full/450524.jpg' alt='sunset'/></div>
        <div><img src='https://wallpaper.dog/large/20367361.jpg' alt='cathedral'/></div>
        <div><img src='https://www.somtoseeks.com/wp-content/uploads/2018/04/Barcelona-Spain-Travel-Walking-Tour-of-Barcelona-Casa-Batlo.jpg' alt='house'/></div>
        <div><img src='https://a.cdn-hotels.com/gdcs/production191/d1075/e7365740-7f8b-11e8-b6b0-0242ac110007.jpg' alt='arc'/></div>
    </AwesomeSlider>

}




