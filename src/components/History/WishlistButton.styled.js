import styled from "styled-components";

export const WishlistButton = styled.button`
  color: ${(props) =>
    props.isInLiked
      ? "var(--color-primary)"
      : "var(--color-text)"}; ;
`;
