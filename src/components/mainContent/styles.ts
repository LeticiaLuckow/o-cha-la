import styled from 'styled-components';

const DivNav = styled.div`
  display: flex;
  padding: 12px 48px;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-family: 'Uchen', serif;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
  flex: 1;
  margin-right: 120px;

  @media only screen and (max-width: 1024px) {
    margin-right: 34px;
  }
`;

const MaxImage = styled.img`
  width: 700px;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const CardDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Uchen', serif;
  flex-direction: column;
  border: 1px solid #ff000026;
  box-shadow: 0px 3px 16px 2px #3a3339;
  background-color: #ffffcc;
  width: 142px;
  border-radius: 15px;
  padding: 14px;
`;

export { DivNav, DescriptionDiv, ImageDiv, MaxImage, CardDiv };
