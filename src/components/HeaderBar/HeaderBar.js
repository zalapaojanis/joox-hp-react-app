import React from 'react';
import styled from 'styled-components';
import { Layout, Input } from 'antd';
import CTRL from 'react-nc';
import JooxLogo from '../../icons/JooxLogo';
import {
    DownloadOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const onCollapse = () => {
    CTRL.setState({
        collapsed: !CTRL.state.collapsed,
    });
};

const HeaderBar = () => {
    return (
        <StyledWrapper>
            <StyledHeaderFixed>
                <StyledHeaderLayout>
                    <div className="menuLayout">
                        <StyledHamburgerMenu onClick={onCollapse}>
                            <span /><span /><span />
                        </StyledHamburgerMenu>
                        <JooxLogo fill={'#fff'} />
                    </div>
                    <div className="searchLayout">
                        <StyledSearchInput placeholder="ค้นหาเพลง ศิลปิน อัลบัม และเพลย์ลิสต์" />
                    </div>
                    <div className="buttonGroupLayout">
                        <div className="buttonLayout">
                            <StyledButton borderColor="#09de6e" backgroundColor="#09de6e" fontColor="#000">
                                <DownloadOutlined />
                                โหลดแอป JOOX บนพีซี
                            </StyledButton>
                        </div>
                        <div className="buttonLayout divideLine">
                            <StyledButton borderColor="#fff" backgroundColor="#000" fontColor="#fff">
                                เข้าสู่ระบบ
                            </StyledButton>
                        </div>
                        <div className="buttonLayout divideLine">
                            <StyledButton borderColor="#fff" backgroundColor="#000" fontColor="#fff">
                                สมัครสมาชิก
                            </StyledButton>
                        </div>
                    </div>
                </StyledHeaderLayout>
            </StyledHeaderFixed>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    position: relative;
    z-index: 4;
`;

const StyledHeaderFixed = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
`;

const StyledHeaderLayout = styled(Header)`
    background-color: #111111;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
    height: 58px;
    padding: 10px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .menuLayout{
        display: flex;
        align-items: center;
    }
    .searchLayout{
        display: flex;
        align-items: center;
        position: relative;
        max-width: 440px;
        width: 100%;
        margin: 0 20px;
    }
    .buttonGroupLayout{
        display: flex;
        align-items: center;
        .buttonLayout{
            display: flex;
            align-items: center;
        }
        .divideLine{
            border-left: 1px solid #4a4a4a;
            padding-left: 10px;
            margin-left: 10px;
        }
    }
`;

const StyledHamburgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span{
        display: block;
        width: 20px;
        height: 1px;
        margin-bottom: 5px;
        position: relative;
        background: #9b9b9b;
        z-index: 2;
        transition: 0.4s;
        margin-right: 20px;
    }
`;

const StyledSearchInput = styled(Search)`
    input{
        background: #cfcfcf;
        border-radius: 0;
        :hover, :focus{
            border-color: #09de6e!important;
        }
        ::placeholder{
            color: #7a7979;
        }
    }
    .ant-input-group-addon{
        border: 0;
        border-radius: 0;
        button{
            background: #cfcfcf;
            border: 0;
            svg{
                fill: #000;
            }
        }

    }
`;

const StyledButton = styled.button`
    display: inline-block;
    background: ${props => props.backgroundColor};
    font-size: 0.875rem;
    color: ${props => props.fontColor};
    font-weight: 500;
    line-height: 0;
    letter-spacing: 0.41px;
    text-align: center;
    min-width: 100px;
    height: 38px;
    border: 1px solid ${props => props.borderColor};
    border-radius: 20px;
    padding: 7px 20px 5px;
    cursor: pointer;
    outline: none;
    transition: all 0.35s;
    white-space: pre;
`;

export default HeaderBar;
