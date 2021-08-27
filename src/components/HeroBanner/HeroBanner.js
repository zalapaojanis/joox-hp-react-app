import React from 'react';
import styled from 'styled-components';
import KeenSlider from '../../components/KeenSlider/KeenSlider';
import {
    heroBannerList,
} from '../../models/banners';
import { v4 as uuidv4 } from 'uuid';

const HeroBanner = () => {
    return (
        <StyledHeroBannerLayout>
            <StyledKeenSlider
                slidesPerView={2}
                spacing={10}
                autoplaySpeed={3000}
                dot
                navigation
                isAutoplay
                loop
                centered
                buttonBackground
            >
                {heroBannerList?.length > 0 && heroBannerList?.map(item => (
                    <StyledItem>
                        <img key={uuidv4()} src={item.src} alt={item.name} />
                    </StyledItem>
                ))}
            </StyledKeenSlider>
        </StyledHeroBannerLayout>
    );
}

const StyledHeroBannerLayout = styled.div`
    background: #222222;
    position: relative;
    padding: 20px 0;
    overflow: hidden;
    z-index: 3;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
`;

const StyledKeenSlider = styled(KeenSlider)`
    order: 2;
    display: flex;
    overflow: hidden;
    height: 100%;
    width: 100%;
    background: #222222;
`;

const StyledItem = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    img{
        max-width: 100%;
    }
`;

export default HeroBanner;
