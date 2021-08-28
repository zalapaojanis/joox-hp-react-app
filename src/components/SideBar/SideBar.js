import React from 'react';
import { Menu, Layout } from 'antd';
import styled from 'styled-components';
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeFilled,
} from '@ant-design/icons';
import { menus, browse, login, about, policy } from '../../models/menus';
import CTRL from 'react-nc';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
    return (
        <StyledWrapper>
            <StyledHeaderFixed>
                <StyledSider className="sideBar" trigger={null} collapsible collapsed={CTRL.state.collapsed}>
                    <Menu theme="dark" defaultSelectedKeys={['menu0']} mode="inline">
                        <div className="mainMenuLayout box">
                            {menus.map((menu, index) => (
                                <Menu.Item key={`menu${index}`} icon={menu.icon}>
                                    <a href={menu.link} target={menu.target} rel="noopener noreferrer">
                                        {menu.name}
                                    </a>
                                </Menu.Item>
                            ))}
                        </div>
                        <div className="downloadLayout">
                            <img src="/images/joox-desktop02.png" alt="download" />
                            <StyledButton borderColor="#09de6e" backgroundColor="#09de6e" fontColor="#000">
                                ดาวน์โหลดแอป JOOX
                            </StyledButton>
                        </div>
                        <div className="browseLayout box">
                            <strong className="browseTitle">Browse</strong>
                            {browse.map((menu, index) => (
                                <Menu.Item className="browseItem" key={`browse${index}`} icon={menu.icon}>
                                    <a href={menu.link} target={menu.target} rel="noopener noreferrer">
                                        {menu.name}
                                    </a>
                                </Menu.Item>
                            ))}
                        </div>
                        <div className="loginLayout box">
                            <strong className="loginTitle">สำหรับผู้ที่ลอคอิน</strong>
                            <ul className="dashed">
                                {login.map((menu, index) => (
                                    <li>
                                        <a key={`login${index}`} href={menu.link} target={menu.target} rel="noopener noreferrer">
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <StyledButton borderColor="#fff" backgroundColor="#000" fontColor="#fff">
                                เข้าสู่ระบบ
                            </StyledButton>
                        </div>
                        <div className="aboutLayout box">
                            {about.map((menu, index) => (
                                <React.Fragment>
                                    {menu?.subMenu?.length > 0 ? (
                                        <SubMenu className="aboutItem" key={`about${index}`} title={menu.name}>
                                            {menu?.subMenu?.map((menu, index) => (
                                                <Menu.Item className="aboutItem" key={`submenu${index}`} icon={menu.icon}>
                                                    <a href={menu.link} target={menu.target} rel="noopener noreferrer">
                                                        {menu.name}
                                                    </a>
                                                </Menu.Item>
                                            ))}
                                        </SubMenu>
                                    ) : (
                                        <Menu.Item className="aboutItem" key={`about${index}`} icon={menu.icon}>
                                            <a href={menu.link} target={menu.target} rel="noopener noreferrer">
                                                {menu.name}
                                            </a>
                                        </Menu.Item>
                                    )}
                                </React.Fragment>
                            ))}
                            <div className="socialNetwork">
                                <FacebookOutlined />
                                <InstagramOutlined />
                                <TwitterOutlined />
                                <YoutubeFilled />
                            </div>
                        </div>
                        <div className="policyLayout box">
                            <ul className="none">
                                {policy.map((menu, index) => (
                                    <li>
                                        <a key={`login${index}`} href={menu.link} target={menu.target} rel="noopener noreferrer">
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="right">
                                © 2011 - 2021 Tencent. <br />
                                All Rights Reserved
                            </div>
                        </div>
                    </Menu>
                </StyledSider>
            </StyledHeaderFixed>
        </StyledWrapper >
    )
}

const StyledWrapper = styled.div`
    position: relative;
    z-index: 999;
`;

const StyledHeaderFixed = styled.div`
    position: fixed;
    top: 58px;
    height: 100%;
`;

const StyledSider = styled(Sider)`
    overflow: hidden;
    height: 100%;
    transition: none;
    .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
        background: #111111;
    }
    ul.ant-menu{
        overflow: auto;
        height: calc(100% - 113px);
        ::-webkit-scrollbar-track {
            background: #101010;
        }
        .ant-menu-item.ant-menu-item-selected{
            color: #09de6e;
        }
        .anticon{
            font-size: 21px;
        }
        .box{
            padding: 10px 20px 0 22px;
            border-bottom: 1px solid rgba(151,151,151,0.2);
            margin-bottom: 10px;
        }
        .mainMenuLayout{
            li.ant-menu-item{
                left: ${props => props.collapsed ? '-10px' : '0'};
                width: ${props => props.collapsed ? '37px' : 'auto'};
                :hover > span > a, :focus > span > a, :active > span > a,
                :hover > span > svg, :focus > span > svg, :active > span > svg{
                    color: #09de6e;
                }
            }
            .ant-menu-dark .ant-menu-item > a, .ant-menu-dark .ant-menu-item > span > a {
                color: #fff;
            }
        }
        .downloadLayout{
            display: ${props => props.collapsed ? 'none' : 'flex'};
            align-items: center;
            position: relative;
            flex-wrap: wrap;
            overflow: hidden;
            justify-content: center;
            padding: 10px 15px 20px 15px;
            border-bottom: 1px solid #97979733;
            img{
                max-width: 100%;
                height: auto;
            }
        }
        .browseLayout{
            .browseTitle{
                display: ${props => props.collapsed ? 'none' : 'flex'};
                font-size: 0.75rem;
                font-weight: 500;
                line-height: 2.1;
            }
            .browseItem > span > a, .browseItem > span > svg {
                color: #bcbcbc;
            }
            li.ant-menu-item{
                left: ${props => props.collapsed ? '-10px' : '0'};
                width: ${props => props.collapsed ? '37px' : 'auto'};
                :hover > span > a, :focus > span > a, :active > span > a,
                :hover > span > svg, :focus > span > svg, :active > span > svg{
                    color: #09de6e;
                }
            }
        }
        .loginLayout{
            display: ${props => props.collapsed ? 'none' : ''};
            button{
                margin: 15px 0;
                width: 100%;
                height: 35px;
            }
            .loginTitle{
                font-size: 0.75rem;
                font-weight: 500;
                line-height: 2.1;
            }
            ul.dashed{
                list-style-type: none;
            }
            ul.dashed > li{
                display: block;
                clear: both;
                margin-bottom: 5px;
                line-height: 1.5;
                text-indent: -5px;
                a{
                    color: #959595;
                    font-size: 12px;
                }
            }
            ul.dashed > li:before{
                content: "-";
                margin-right: 10px;
                float: left;
                text-indent: 0px;
            }
        }
        .aboutLayout{
            display: ${props => props.collapsed ? 'none' : ''};
            li.ant-menu-item{
                left: ${props => props.collapsed ? '-10px' : '0'};
                :hover > span > a, :focus > span > a, :active > span > a,
                :hover > span > svg, :focus > span > svg, :active > span > svg{
                    color: #fff;
                }
            }
            .aboutItem > span > a, .aboutItem > div > span{
                color: #bcbcbc;
            }
            .socialNetwork{
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    font-size: 1.375rem;
                    color: #bcbcbc;
                    margin-right: 18px;
                    transition: color .2s;
                }
            }
        }
        .policyLayout{
            display: ${props => props.collapsed ? 'none' : ''};
            border-bottom: 0;
            ul.none{
                list-style-type: none;
                margin-bottom: 15px;
            }
            ul.none > li{
                display: block;
                clear: both;
                line-height: 1.5;
                text-indent: 0px;
                a{
                    color: #959595;
                    font-size: 12px;
                }
            }
            ul.none > li:before{
                content: "";
                margin-right: 10px;
                float: left;
                text-indent: 0px;
            }
            .right{
                color: #b5b5b5;
                line-height: 1.5;
                font-size: 12px;
                margin-bottom: 20px;
            }
        }
    }
    
`;

const StyledButton = styled.button`
    display: inline-block;
    background: ${props => props.backgroundColor};
    font-size: 0.875rem;
    color: ${props => props.fontColor};
    font-weight: 400;
    line-height: 0;
    letter-spacing: 0.41px;
    text-align: center;
    min-width: 100px;
    height: 26px;
    border: 1px solid ${props => props.borderColor};
    border-radius: 40px;
    padding: 7px 20px 5px;
    cursor: pointer;
    outline: none;
    transition: all 0.35s;
    white-space: pre;
`;

export default SideBar;