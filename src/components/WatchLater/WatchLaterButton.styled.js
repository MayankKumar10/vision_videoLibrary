import styled from "styled-components";

export const WatchLaterButton = styled.button`
  color: ${(props) =>
    props.isInWatch
      ? "var(--color-primary)"
      : "var(--color-text)"}; ;
`;
