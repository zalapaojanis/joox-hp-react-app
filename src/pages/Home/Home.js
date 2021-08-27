import React from 'react';
import styled from 'styled-components';
import {
    RightOutlined,
    EyeFilled,
    LikeFilled,
} from '@ant-design/icons';
import KeenSlider from '../../components/KeenSlider/KeenSlider';
import {
    hitChart,
    recommendPlaylist,
    vdo,
    mv,
    columnSong,
    songType,
    songList
} from '../../models/banners';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    return (
        <React.Fragment>
            <HeroBanner />
            <StyledContainer>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/hitChart">
                            ชาร์ตเพลงฮิต
                        </a>
                        <button>
                            <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                        </button>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={3}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {hitChart?.length > 0 && hitChart?.map(item => (
                            <StyledHitChart backgroundContent={item.backgroundContent}>
                                <div className="gridGroup">
                                    <StyledImage>
                                        <img key={uuidv4()} src={item.imgSrc} alt={item.name} />
                                    </StyledImage>
                                    <div className="topGroup">
                                        <strong>{item.title}</strong>
                                        <ul>
                                            <li>
                                                <a href="/">
                                                    <strong>1</strong><span>{item.top1}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <strong>2</strong><span>{item.top2}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <strong>3</strong><span>{item.top3}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span className="hitText">ฟังเพลงจากชาร์ตเพลง {item.title} อัพเดทเพลงฮิต ทุกสัปดาห์</span>
                            </StyledHitChart>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/recommendPlaylist">
                            เพลย์ลิสต์แนะนำวันนี้
                        </a>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={6}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {recommendPlaylist?.length > 0 && recommendPlaylist?.map(item => (
                            <StyledHitAlbum>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="albumNameGroup">
                                    <span className="albumName">{item.name}</span>
                                    <span className="hitText">ฟังเพลงเพราะๆจากเพลย์ลิสต์ ฟังเพลินได้ตลอดทั้งวัน</span>
                                </div>
                            </StyledHitAlbum>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/boyBand">
                            10 บอยแบนด์ที่ดีที่สุดตลอดกาล [อินเตอร์]
                        </a>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={6}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {recommendPlaylist?.length > 0 && recommendPlaylist?.map(item => (
                            <StyledHitAlbum>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="albumNameGroup">
                                    <span className="albumName">{item.name}</span>
                                    <span className="hitText">ฟังเพลงเพราะๆจากเพลย์ลิสต์ ฟังเพลินได้ตลอดทั้งวัน</span>
                                </div>
                            </StyledHitAlbum>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/topTen">
                            Top 10 เพลงมาแรงที่สุดตอนนี้!!
                        </a>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={6}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {recommendPlaylist?.length > 0 && recommendPlaylist?.map(item => (
                            <StyledHitAlbum>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="albumNameGroup">
                                    <span className="albumName">{item.name}</span>
                                    <span className="hitText">ฟังเพลงเพราะๆจากเพลย์ลิสต์ ฟังเพลินได้ตลอดทั้งวัน</span>
                                </div>
                            </StyledHitAlbum>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/listenFromHome">
                            JOOX ฟัง from Home
                        </a>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={6}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {recommendPlaylist?.length > 0 && recommendPlaylist?.map(item => (
                            <StyledHitAlbum>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="albumNameGroup">
                                    <span className="albumName">{item.name}</span>
                                    <span className="hitText">ฟังเพลงเพราะๆจากเพลย์ลิสต์ ฟังเพลินได้ตลอดทั้งวัน</span>
                                </div>
                            </StyledHitAlbum>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/thaiCountry">
                            ลูกทุ่ง | ไทบ้าน ฮิตติดชาร์ต
                        </a>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={6}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {recommendPlaylist?.length > 0 && recommendPlaylist?.map(item => (
                            <StyledHitAlbum>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="albumNameGroup">
                                    <span className="albumName">{item.name}</span>
                                    <span className="hitText">ฟังเพลงเพราะๆจากเพลย์ลิสต์ ฟังเพลินได้ตลอดทั้งวัน</span>
                                </div>
                            </StyledHitAlbum>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/latestVideo">
                            วิดีโอล่าสุด
                        </a>
                        <button>
                            <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                        </button>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={3}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {vdo?.length > 0 && vdo?.map(item => (
                            <StyledVdo>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="vdoText">
                                    <span className="titleText">{item.title}</span>
                                    <span className="dateStr">{item.dateStr}</span>
                                </div>
                            </StyledVdo>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/musicVideo">
                            เอ็มวี
                        </a>
                        <button>
                            <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                        </button>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={3}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {mv?.length > 0 && mv?.map(item => (
                            <StyledVdo>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="vdoText">
                                    <span className="titleText">{item.title}</span>
                                    <span className="dateStr">{item.dateStr}</span>
                                </div>
                            </StyledVdo>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/columnSong">
                            คอลัมน์เพลง
                        </a>
                        <button>
                            <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                        </button>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={2}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {columnSong?.length > 0 && columnSong?.map(item => (
                            <StyledColumnSong backgroundContent={item.backgroundContent}>
                                <div className="gridGroup">
                                    <StyledImage>
                                        <img key={uuidv4()} src={item.imgSrc} alt={item.name} />
                                    </StyledImage>
                                    <div className="contentGroup">
                                        <div className="titleGroup">
                                            <span><a href={item.link}>{item.title}</a></span>
                                        </div>
                                        <div className="viewLikeGroup">
                                            <span className="viewCount"><EyeFilled /> {item.view}</span>
                                            <span className="likeCount"><LikeFilled /> {item.like}</span>
                                        </div>
                                    </div>
                                </div>
                            </StyledColumnSong>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/songType">
                            แนวเพลง
                        </a>
                        <button>
                            <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                        </button>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={3}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {songType?.length > 0 && songType?.map(item => (
                            <StyledSongType>
                                <div className="relative">
                                    <StyledImage>
                                        <img key={uuidv4()} src={item.imgSrc} alt={item.name} />
                                    </StyledImage>
                                    <div className="songTypeName">
                                        <StyledTitle>
                                            <a href={item.link}>
                                                {item.name}
                                            </a>
                                            <button>
                                                <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                                            </button>
                                        </StyledTitle>
                                    </div>
                                </div>
                            </StyledSongType>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
                <StyledSectionWrapper>
                    <StyledTitle>
                        <a href="/songList">
                            ลิสต์เพลง
                        </a>
                        <button>
                            <RightOutlined style={{ color: '#fff', fontSize: '28px' }} />
                        </button>
                    </StyledTitle>
                    <StyledKeenSlider
                        slidesPerView={6}
                        spacing={10}
                        autoplaySpeed={3000}
                        navigation
                        left="-70px"
                        right="-70px"
                    >
                        {songList?.length > 0 && songList?.map(item => (
                            <StyledSongList>
                                <StyledImage>
                                    <img key={uuidv4()} src={item.imgSrc} alt={item.id} />
                                </StyledImage>
                                <div className="listText">
                                    <span className="titleText">{item.name}</span>
                                </div>
                            </StyledSongList>
                        ))}
                    </StyledKeenSlider >
                </StyledSectionWrapper>
            </StyledContainer>
        </React.Fragment >
    );
}

const StyledContainer = styled.div`
    max-width: 1095px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 7px;
    padding-right: 7px;
    span.albumName{
        font-size: 0.875rem;
        color: #fff;
        text-align: left;
        cursor: pointer;
        transition: color 0.2s ease 0s;
        font-weight: 700;
        margin: 5px 0px;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
        display: block;
    }
    span.hitText{
        font-size: 0.75rem;
        color: rgb(188, 188, 188);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        margin-top: 10px;
    }
`;

const StyledSectionWrapper = styled.div`
    margin-bottom: 40px;
`;

const StyledKeenSlider = styled(KeenSlider)`
    order: 2;
    display: flex;
    overflow: hidden;
    height: 100%;
    width: 100%;
`;

const StyledImage = styled.div`
    img{
        max-width: 100%;
    }
`;

const StyledHitChart = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    display: flex;
    flex-direction: column;
    div.gridGroup{
        display: grid;
        grid-template-columns: 30% 70%;
        div.topGroup{
            background: ${props => props.backgroundContent};
            text-align: left;
            padding: 5px 10px 0px;
            color: #fff;
            ul{
                list-style-type: none;
                margin: 0;
                padding: 0;
                li{
                    a{
                        color: #fff;
                        strong{
                            font-size: 16px;
                            margin-right: 10px;
                        }
                    }
                    
                }
            }
        }
    }
`;

const StyledHitAlbum = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    display: flex;
    flex-direction: column;
    div.albumNameGroup{
        margin: 5px 0px 0px;
        span.hitText{
            white-space: inherit;
            text-align: left;
            margin-top: 0px;
        }
    }
`;

const StyledVdo = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    display: flex;
    flex-direction: column;
    div.vdoText{
        margin: 10px 0px 0px;
        text-align: left;
        span.titleText{
            font-size: 0.875rem;
            color: #bcbcbc;
            cursor: pointer;
            transition: color .2s;
            display: block;
            line-height: 22px;
            max-height: 43px;
            overflow: hidden;
        }
        span.dateStr{
            display: block;
            font-size: 0.8125rem;
            color: #959595;
            line-height: 1.2;
        }
    }
`;

const StyledTitle = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.82px;
    transition: color 0.35s;
    margin: 0;
    padding: 25px 0;
    a{
        font-size: 1.25rem;
        font-weight: 500;
        color: #fff;
        letter-spacing: 0.82px;
        line-height: 1.7;
        :hover, :focus{
            color: #09de6e;
        }
    }
    button{
        position: relative;
        background: transparent;
        border: 0;
        cursor: pointer;
        :hover, :focus{
            left: 5px;
            svg{
                fill: #09de6e;
            }
        }
        svg{
            font-size: 12px;
        }
    }
`;

const StyledColumnSong = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    display: flex;
    flex-direction: column;
    div.gridGroup{
        display: grid;
        grid-template-columns: 50% 50%;
        div.contentGroup{
            background: ${props => props.backgroundContent};
            width: 100%;
            padding-top: 25px;
            line-height: 1.6;
            div.titleGroup{
                display: block;
                span{
                    font-size: 0.875rem;
                    color: rgb(188, 188, 188);
                    cursor: pointer;
                    transition: color 0.2s ease 0s;
                    display: block;
                    line-height: 22px;
                    max-height: 64px;
                    overflow: hidden;
                    text-align: justify;
                    padding: 0 17px 2px 17px;
                    a{
                        color: rgb(236, 236, 236);
                    }
                }
            }
            div.viewLikeGroup{
                font-size: 0.8125rem;
                color: rgba(255, 255, 255, 0.6);
                position: absolute;
                bottom: 20px;
                left: 287px;
                span.viewCount{
                    margin-right: 30px;
                }
                span.likeCount{

                }
            }
        }
    }
`;

const StyledSongType = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    div.relative{
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        div.songTypeName{
            position: absolute;
            z-index: 1;
            display: flex;
            align-items: flex-end;
            -webkit-box-pack: center;
            justify-content: center;
            background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
            width: 100%;
            height: 100%;
            div{
                padding: 5px 0;
            }
        }
    }
`;


const StyledSongList = styled.div.attrs(() => ({
    className: 'keen-slider__slide',
}))`
    display: flex;
    flex-direction: column;
    div.listText{
        margin: 10px 0px 0px;
        text-align: left;
        span.titleText{
            font-size: 0.875rem;
            color: #bcbcbc;
            cursor: pointer;
            transition: color .2s;
            display: block;
            line-height: 22px;
            max-height: 43px;
            overflow: hidden;
        }
    }
`;

export default Home;
