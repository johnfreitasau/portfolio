import { css } from '@emotion/react';

export const global = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .next-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    &---contained {
      object-fit: contain;
    }
  }
`;
