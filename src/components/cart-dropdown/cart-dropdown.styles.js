import styled from "styled-components";
import Button from "../button/Button";
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
// .empty-message {
//   font-size: 18px;
//   margin: 50px auto;
// }

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

// export const ButtonContainer = styled(Button)`
//   margin-top: auto;
// `;

// button {
//   margin-top: auto;
// }
