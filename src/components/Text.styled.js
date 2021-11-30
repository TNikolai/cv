import styled from "@emotion/styled";
import { css } from "@emotion/react";

import breakpoints from "/src/styles/breakpoints";

const { widthSmall } = breakpoints;

const textSizes = ({ size, isFixedSize }) => {
  const sizes = {
    xl: css`
      font-size: ${isFixedSize ? "1.125rem" : "1rem"};
      line-height: ${isFixedSize ? "1.625rem" : "1.5rem"};

      @media (${widthSmall}) {
        font-size: 1.125rem;
        line-height: 1.625rem;
      }
    `,
    l: css`
      font-size: ${isFixedSize ? "1rem" : "0.875rem"};
      line-height: ${isFixedSize ? "1.5rem" : "1.125rem"};

      @media (${widthSmall}) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    `,
    m: css`
      font-size: 0.875rem;
      line-height: 1.125rem;
    `,
    s: css`
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 600;
    `,
    xs: css`
      font-size: 0.625rem;
      line-height: 0.875rem;
      font-weight: 600;
    `,
  };

  return sizes[size];
};

const textTypes = ({ type }) => {
  const types = {
    heavy: css`
      font-weight: 800;
    `,
    semibold: css`
      font-weight: 600;
    `,
  };

  return types[type];
};

const Text = styled.span`
  label: Text;

  font-weight: 500;

  ${textSizes}
  ${textTypes}
`;

export default Text;
