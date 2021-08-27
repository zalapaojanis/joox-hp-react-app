import React from 'react';
import styled from 'styled-components';
import { Layout, Slider } from 'antd';
import {
    FastBackwardFilled,
    PlayCircleFilled,
    FastForwardFilled,
    FullscreenOutlined,
    StarFilled,
    RollbackOutlined,
    RetweetOutlined,
    ReadOutlined,
    SoundFilled,
    UnorderedListOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

const FooterBar = () => {
    return (
        <StyledWrapper>
            <StyledFooterFixed>
                <StyledFooterLayout>
                    <div className="playerLayout">
                        <div className="cd">
                            <div className="album">
                                <div className="albumPhoto">
                                    <img src="/images/default-album@300.png" alt="album" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="playBtn">
                                <FullscreenOutlined className="playerIcon" />
                            </button>
                            <button className="playBtn">
                                <FastBackwardFilled className="playerIcon medium" />
                            </button>
                            <button className="playBtn">
                                <PlayCircleFilled className="playerIcon big" />
                            </button>
                            <button className="playBtn">
                                <FastForwardFilled className="playerIcon medium" />
                            </button>
                            <button className="playBtn">
                                <RetweetOutlined className="playerIcon" />
                            </button>
                        </div>

                    </div>
                    <div className="playerProgress">
                        <div className="song">
                            <div className="songNameLayout">
                                <div className="songName">
                                    <b><a href="/song">เพลง</a></b>
                                    <span><a href="/artist">ศิลปิน</a></span>
                                </div>
                                <div className="songOption">
                                    <div className="option">
                                        <button className="optionBtn">
                                            <StarFilled className="playerIcon" />
                                        </button>
                                    </div>
                                    <div className="option">
                                        <button className="optionBtn">
                                            <RollbackOutlined  className="playerIcon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="time">
                            <small className="progressTime">00:00</small>
                            <div className="progressBar">
                                <Slider defaultValue={0} />
                            </div>
                            <small className="progressTime">00:00</small>
                        </div>
                    </div>
                    <div className="sound">
                        <div className="volume">
                            <button className="playBtn">
                                <SoundFilled className="playerIcon" />
                            </button>
                            <div className="progressBar">
                                <Slider defaultValue={50} />
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <button className="playBtn">
                            <ReadOutlined className="playerIcon" />
                        </button>
                    </div>
                    <div className="options">
                        <button className="playBtn">
                            <UnorderedListOutlined className="playerIcon" />
                        </button>
                    </div>
                </StyledFooterLayout>
            </StyledFooterFixed>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    position: relative;
    z-index: 999;
`;

const StyledFooterFixed = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
`;

const StyledFooterLayout = styled(Footer)`
    background-color: #111111;
    padding: 0px 20px 0 25px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .playerLayout{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .cd{
            width: 71px;
            height: 71px;
            background: url(/images/vinyl.png) center center / contain no-repeat;
            position: relative;
            z-index: 9;
            margin-top: -20px;
            div.album{
                width: 48px;
                height: 48px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                div.albumPhoto{
                    position: absolute;
                    display: block;
                    padding: 3px;
                    inset: 0px;
                    img{
                        width: 42px;
                        height: 42px;
                        border-radius: 50%;
                        animation: 6s linear 0s infinite normal none paused iVXCSc;
                    }
                }
            }
        }
        div{
            button.playBtn{
                color: rgb(135, 135, 135);
                background: transparent;
                outline: none;
                border: none;
                cursor: pointer;
                display: inline-block;
                padding: 0px;
                text-align: center;
                transition: color 0.3s ease 0s;
                width: 40px;
                height: 40px;
                position: relative;
                .playerIcon{
                    line-height: 1;
                    font-size: 1.3em;
                    -webkit-font-smoothing: antialiased;
                }
                .medium{
                    font-size: 1.5em;
                }
                .big{
                    font-size: 1.8em;
                }
            }
        }
    }
    div.playerProgress{
        flex: 0 0 calc(100% - 780px);
        max-width: calc(100% - 780px);
        position: relative;
        padding: 25px 45px 0px;
        height: 100%;
        margin: 0 15px;
        div.song{
            position: absolute;
            top: 5px;
            left: 0px;
            right: 0px;
            transition: opacity 0.4s ease 0s;
            div.songNameLayout{
                font-size: 0.75rem;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                vertical-align: middle;
                height: 30px;
                -webkit-box-pack: justify;
                justify-content: space-between;
                padding-top: 2px;
                position: relative;
                div.songName{
                    flex: 0 0 calc(100% - 80px);
                    display: inline-flex;
                    line-height: 25px;
                    position: relative;
                    top: -2px;
                    a{
                        display: inline-block;
                        transition: color 0.3s ease 0s;
                        color: rgb(220, 219, 219);
                    }
                    b{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: rgb(220, 219, 219);
                        margin-right: 5px;
                        display: inline-block;
                        max-width: 65%;
                        cursor: pointer;
                    }
                    span{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: rgb(149, 149, 149);
                        display: inline-block;
                        max-width: 50%;
                        cursor: pointer;
                    }
                }
                div.songOption{
                    max-width: 80px;
                    flex: 0 0 80px;
                    display: flex;
                    -webkit-box-pack: end;
                    justify-content: flex-end;
                    -webkit-box-align: center;
                    align-items: center;
                    padding-top: 2px;
                    div.option{
                        min-width: 30px;
                        text-align: right;
                        position: relative;
                        top: -4px;
                        button.optionBtn{
                            color: rgb(135, 135, 135);
                            background: transparent;
                            outline: none;
                            border: none;
                            cursor: pointer;
                            display: inline-block;
                            padding: 0px;
                            text-align: center;
                            transition: color 0.3s ease 0s;
                            width: 16px;
                            height: 16px;
                            position: relative;
                            .playerIcon{
                                line-height: 1;
                                font-size: 1.2em;
                                -webkit-font-smoothing: antialiased;
                            }
                        }
                    }
                }
            }
        }
        div.time{
            position: absolute;
            bottom: 5px;
            left: 0px;
            right: 0px;
            transition: opacity 0.4s ease 0s;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .progressTime{
                font-size: 0.7em;
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }
    .progressBar{
        cursor: pointer;
        position: relative;
        width: 100%;
        margin: 0 5px;
        .ant-slider{
            .ant-slider-track{
                background: #09de6e;
            }
            .ant-slider-rail{
                border: 1px solid rgba(255, 255, 255, 0.7);
                background: #403f3f;
            }
            .ant-slider-handle{
                border: 0;
                width: 10px;
                height: 10px;
                margin-top: -3px;
                background: #09de6e;
            }
        }
    }
    div.sound{
        flex: 0 0 calc(100% - 780px);
        max-width: 10%;
        position: relative;
        padding: 25px 45px 0px;
        height: 100%;
        margin: 0px;
        .ant-slider{
            .ant-slider-track{
                background: #fff;
            }
            .ant-slider-handle{
                background: #fff;
            }
        }
        div.volume{
            position: absolute;
            bottom: 5px;
            left: 0px;
            right: 0px;
            transition: opacity 0.4s ease 0s;
            display: flex;
            justify-content: space-between;
            align-items: center;
            button.playBtn{
                color: rgb(135, 135, 135);
                background: transparent;
                outline: none;
                border: none;
                cursor: pointer;
                display: inline-block;
                padding: 0px;
                text-align: center;
                transition: color 0.3s ease 0s;
                width: 40px;
                height: 40px;
                position: relative;
                .playerIcon{
                    line-height: 1;
                    font-size: 1.4em;
                    -webkit-font-smoothing: antialiased;
                }
            }
        }
    }
    div.options{
        display: flex;
        align-items: center;
        button.playBtn{
            color: rgb(135, 135, 135);
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            display: inline-block;
            padding: 0px;
            text-align: center;
            transition: color 0.3s ease 0s;
            width: 40px;
            height: 40px;
            position: relative;
            .playerIcon{
                line-height: 1;
                font-size: 1.4em;
                -webkit-font-smoothing: antialiased;
            }
        }
    }
`;

export default FooterBar;
