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
  font-family: 'Uchen', serif;
  justify-content: space-between;
  padding: 12px 48px;
  flex: 1;
  align-items: center;

  background: linear-gradient(
    270deg,
    rgba(161, 196, 136, 0.9923319669664741) 50%,
    rgba(240, 230, 239, 1) 50%
  );
`;

const DivLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 22px;
`;
const MenuDiv = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  flex: 1;
  justify-content: center;
`;

const SpanDiv = styled.span`
  height: 100%;
  vertical-align: middle;
  display: flex;
  position: relative;
  font-size: 22px;
`;
export { DivTitle, SpanDiv, DivLogin, DivLogo, MenuDiv };
