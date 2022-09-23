import styled from 'styled-components';

const DivTitle = styled.div`
  font-size: 48px;
  margin: 0;
  cursor: pointer;
  font-family: Pacifico;
  flex: 1;
`;
const DivLogo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 48px;
  flex: 1;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgba(189, 236, 175, 0.9923319669664741) 50%,
    rgba(255, 227, 237, 1) 50%
  );
`;

const DivLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Uchen', serif;
  font-size: 22px;
`;
const MenuDiv = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  color: white;
  flex: 1;
  justify-content: center;
`;

const SpanDiv = styled.span`
  height: 100%;
  vertical-align: middle;
  display: flex;
  position: relative;
  font-family: 'Uchen', serif;
  font-size: 22px;
`;
export { DivTitle, SpanDiv, DivLogin, DivLogo, MenuDiv };
