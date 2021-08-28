import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import cx from 'classnames';
import {
    RightOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const KeenSlider = props => {
    const {
        className,
        children = null,
        slidesPerView = 8,
        navigation = true,
        left = '0',
        right = '0',
        prevButton = 'arrowLeft',
        nextButton = 'arrowRight',
        mode = 'free-snap',
        centered = false,
        rubberband = true,
        loop = false,
        spacing = 0,
        breakpoints = undefined,
        controls = true,
        duration = 500,
        dot = false,
        isAutoplay = false,
        autoplaySpeed = 6000,
        widthIcon = '28px',
        heightIcon = '28px',
        buttonBackground = false,
        selectedSliderIndex = null,
    } = props;

    const [pause, setPause] = React.useState(false);
    const timer = React.useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [controlsStatus, setControlStatus] = useState({
        left: false,
        right: false,
    });

    const [ref, slider] = useKeenSlider({
        mode,
        slides: '.keen-slider__slide',
        slidesPerView,
        centered,
        rubberband,
        loop,
        spacing,
        breakpoints,
        controls,
        duration,
        slideChanged: slide => {
            setCurrentSlide(slide?.details()?.relativeSlide);
            if (loop) {
                setControlStatus({
                    left: false,
                    right: false,
                });
            } else if (slide?.details()?.size < slidesPerView) {
                setControlStatus({
                    left: true,
                    right: true,
                });
            } else {
                setControlStatus({
                    left: slide?.details()?.relativeSlide === 0,
                    right:
                        slide?.details()?.relativeSlide ===
                        slide?.details()?.size - slidesPerView,
                });
            }
        },
        dragStart: () => {
            if (isAutoplay) {
                setPause(true);
            }
        },
        dragEnd: () => {
            if (isAutoplay) {
                setPause(false);
            }
        },
    });

    useEffect(() => {
        if (slider) slider.refresh();
    }, [children, slider]);

    useEffect(() => {
        if (slider && selectedSliderIndex) {
            slider?.moveToSlideRelative(selectedSliderIndex);
        }
    }, [selectedSliderIndex, slider]);

    useEffect(() => {
        if (isAutoplay) {
            ref.current.addEventListener('mouseover', () => {
                setPause(true);
            });
            ref.current.addEventListener('mouseout', () => {
                setPause(false);
            });
        }
    }, [isAutoplay, ref]);

    useEffect(() => {
        if (isAutoplay) {
            timer.current = setInterval(() => {
                if (!pause && slider) {
                    slider.next();
                }
            }, autoplaySpeed);
        }
        return () => {
            if (isAutoplay) {
                clearInterval(timer.current);
            }
        };
    }, [autoplaySpeed, isAutoplay, pause, slider]);

    return (
        <StyledKeenSliderLayout buttonBackground={buttonBackground} left={left} right={right}>
            {navigation && (
                <React.Fragment>
                    <button
                        className={cx('controlsArrow', 'prev', prevButton, {
                            'controlsArrowDisabled': controlsStatus.left,
                        })}
                        onClick={() => slider?.prev()}
                    >
                        <LeftOutlined style={{ color: '#fff', fontSize: '28px' }} width={widthIcon} height={heightIcon} />
                    </button>
                    <button
                        className={cx('controlsArrow', 'next', nextButton, {
                            'controlsArrowDisabled': controlsStatus.right,
                        })}
                        onClick={() => {
                            slider?.next()
                        }}
                    >
                        <RightOutlined style={{ color: '#fff', fontSize: '28px' }} width={widthIcon} height={heightIcon} />
                    </button>
                </React.Fragment>
            )}
            {dot && (
                <div className="dots">
                    {[...Array(slider?.details()?.size)?.keys()]?.map(idx => {
                        return (
                            <button
                                key={uuidv4()}
                                onClick={() => {
                                    slider?.moveToSlideRelative(idx);
                                }}
                                className={cx('dot', { 'active': currentSlide === idx })}
                            />
                        );
                    })}
                </div>
            )}
            <div ref={ref} className={cx('keenSlider', className)}>
                {children}
            </div>
        </StyledKeenSliderLayout>
    );
};

const StyledKeenSliderLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .keenSlider{
        text-align: center;
        display: flex;
        overflow: hidden;
        position: relative;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
        
        &__slide {
            position: relative;
            overflow: hidden;
            width: 100%;
            min-height: 100%;
        }
        
        &[data-keen-slider-v] {
            flex-wrap: wrap;
        }
        
        &[data-keen-slider-v] &__slide {
            width: 100%;
        }
        
        &[data-keen-slider-moves] * {
            pointer-events: none;
        }
    }
        
    .controlsArrow {
        margin: 0 7.5px;
        border: none;
        cursor: pointer;
    }

    .arrowLeft {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        ${props => props.buttonBackground ? 'background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgb(0, 0, 0));' : ''} 
        background-color: transparent;
        margin: 0;
    }
        
    .arrowRight {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        ${props => props.buttonBackground ? 'background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(0, 0, 0));' : ''} 
        background-color: transparent;
        margin: 0;
    }
        
    .prev {
        position: absolute;
        left: ${props => props.left};
        z-index: 2;
    }
        
    .next {
        position: absolute;
        right: ${props => props.left};
        z-index: 2;
    }
    
    .controlsArrowDisabled {
        display: none;
        cursor: default;
    }

    .dots {
        display: flex;
        padding: 10px 0;
        justify-content: center;
        position: absolute;
        z-index: 2;
        bottom: 0;
    }
        
    .dot {
        border: none;
        width: 10px;
        height: 10px;
        background: rgba(125, 125, 125, 0.5);
        border-radius: 50%;
        margin: 0 5px;
        padding: 5px;
        cursor: pointer;
    }
        
    .dot:focus {
        outline: none;
    }
        
    .dot.active {
        background: #fff;
    }
`;

const MemoKeenSlider = React.memo(KeenSlider);

export {
    MemoKeenSlider as KeenSlider,
    MemoKeenSlider as default,
};