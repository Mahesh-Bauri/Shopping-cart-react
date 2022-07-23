import styled from "styled-components";
import Button from "../button/Button";

export const PaymentFormContainer = styled.div`
  /* height: 300px; */
  width: 100%;
  padding-bottom: 2rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const FormContainer = styled.form`
  margin-top: 10px;
  height: 100px;
  width: 100%;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const EmptyMessage = styled.p`
  font-size: 2rem;
  padding: 3rem 2rem;
`;

export const PaymentHeading = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-top: 6px;
    display: flex;
    align-items: center;
    margin-left: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`;
