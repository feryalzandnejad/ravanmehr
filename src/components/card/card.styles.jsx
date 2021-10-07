import styled from 'styled-components';

export const FullCardContainer = styled.div`
&:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0.2,0.6);
}
&:slick-slide > div {
  margin: 0 10px;
}
  border-radius: 4px;
  height: 500px;
  margin:5px 20px;
  background: #f5f5f5;
  color: #666;
  overflow: hidden;
  box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.2);
  transition: 0.3s;
  img{
  width: 100%;
  height: 350px;
  object-fit: cover;
  }
  margin-left:30px;
`; 

export const ImageContainer = styled.div`
    height:350px;
`;
 export const ContentContainer = styled.div`
    height: 30px;
    width:60px;
    text-align:center;
 `;
 
 export const PriceContainet = styled.div`
    height:30px;
    width:80px;
    text-align:center;
    margin:20px 0;
    font-size: 22px;
 `;


export const CardBody = styled.div`
     height: 100px;
`;