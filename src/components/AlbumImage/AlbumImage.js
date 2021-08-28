import React from 'react';
import styled from 'styled-components';
import {
    PlayCircleFilled,
} from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const AlbumImage = props => {
    const { imgSrc, name, showOnPlay = false } = props;
    return (
        <StyledImage showOnPlay={showOnPlay}>
            <a href="/">
                <img key={uuidv4()} src={imgSrc} alt={name} />
                <div className="hoverOverlay">
                    <PlayCircleFilled />
                </div>
            </a>
        </StyledImage>
    );
}

const StyledImage = styled.div`
    width: 100%;
    position: relative;
    a{
        img{
            width: 100%;
        }
        div.hoverOverlay{
            display: none;
        }
        :hover, :focus{
            div.hoverOverlay{
                background: linear-gradient( to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100% );
                position: absolute;
                bottom: 0%;
                left: 0;
                width: 100%;
                height: 50%;
                display: ${props => props.showOnPlay ? 'flex' : 'none'};
                justify-content: flex-end;
                align-items: flex-end;
                padding: 0 8px 8px 10px;
                svg{
                    color: #fff;
                    font-size: 25px;
                }
            }
        }
    }
`;


const MemoAlbumImage = React.memo(AlbumImage);

export {
    MemoAlbumImage as AlbumImage,
    MemoAlbumImage as default,
};
