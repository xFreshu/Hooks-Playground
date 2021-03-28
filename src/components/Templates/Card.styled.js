import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  margin-bottom: 60px;
`;
export const CardName = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10%;
  width: 90%;
`;
export const Header = styled.span`
  font-size: 30px;
  margin: 40px 0;
  font-weight: 700;
`;