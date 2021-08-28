import { Collapse } from 'antd';
import styled from 'styled-components';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import CTRL from 'react-nc';
import { topKeywords, songCategory } from '../../models/sitemap';
import React from 'react';

const { Panel } = Collapse;

const onCollapse = () => {
    console.log(CTRL.state.showSitemap)
    CTRL.setState({
        showSitemap: !CTRL.state.showSitemap,
    });
};

const Sitemap = () => {
    return (
        <StyledWrapper showSitemap={CTRL.state.showSitemap}>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => isActive ? <UpOutlined /> : <DownOutlined />}
                expandIconPosition="right"
                className="site-collapse-custom-collapse"
                ghost
                onChange={onCollapse}
            >
                <Panel header={CTRL.state.showSitemap ? 'แสดง sitemap' : 'ปิด sitemap'} key="1" showArrow={true}>
                    <StyledTopKeywords>
                        <p>Top keywords</p>
                        <div className="buttonGroup">
                            {topKeywords.map(item => (
                                <StyledButton key={item.id}>
                                    {item.keyword}
                                </StyledButton>
                            ))}
                        </div>
                    </StyledTopKeywords>
                    <StyledSongCategory>
                        {songCategory.map(item => (
                            <div className="gridItem">
                                <a className="title" href={item.link} key={item.id}>{item.title}</a>
                                <div>
                                    {item?.songs?.length > 0 && item?.songs?.map((item, index) => (
                                        <React.Fragment>
                                            <a className="songName" href={item.link} key={item.id}>{item.name}</a>
                                            <span>|</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </StyledSongCategory>
                </Panel>
            </Collapse>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    text-align: center;
    max-width: 1095px;
    margin: 0 auto 20px auto;
    padding: 0 7px;
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        color: #959595;
        border-top: 1px solid #373737;
        padding-bottom: 20px;
        span.ant-collapse-arrow{
            top: 46%;
            right: ${props => props.showSitemap ? '45%' : '46%'};
        }
    }
`;

const StyledTopKeywords = styled.div`
    text-align: center;
    margin-bottom: 30px;
    p{
        margin-bottom: 15px;
        color: #fff;
        font-weight: bold;
        font-size: 17px;
    }
    div.buttonGroup{
        font-size: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const StyledButton = styled.button`
    display: block;
    background: transparent;
    border: 1px solid rgb(136, 136, 136);
    border-radius: 20px;
    color: rgb(149, 149, 149);
    height: 36px;
    line-height: 1.75;
    padding: 4px 20px;
    white-space: pre;
    cursor: pointer;
    transition: all 0.35s ease 0s;
    margin: 6px 5px;
    :hover, :focus{
        background: rgb(149, 149, 149);
        color: #222222;
    }
`;

const StyledSongCategory = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div.gridItem{
        text-align: left;
        margin-bottom: 20px;
        padding: 0 7px;
        a.title{
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }
        div{
            line-height: 1.2;
            margin-top: 3px;
            a.songName{
                color: #959595;
                font-size: 12px;
            }
            span{
                color: #959595;
                margin: 0 5px;
                font-size: 12px;
                font-weight: 100;
            }
        }
    }
`;

export default Sitemap;