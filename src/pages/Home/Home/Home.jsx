import React from 'react';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import History from '../History/History';
import WhyChooseToyCar from '../WhyChooseToyCar/WhyChooseToyCar';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <History></History>
            <WhyChooseToyCar></WhyChooseToyCar>
        </div>
    );
};

export default Home;