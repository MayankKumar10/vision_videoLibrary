import styled from "styled-components";

export const WishlistButton = styled.button`
  color: ${(props) =>
    props.isInState
      ? "var(--color-primary)"
      : "var(--color-text)"}; ;
`;
