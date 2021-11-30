import styled from "@emotion/styled";
import { css } from "@emotion/react";

import breakpoints from "/src/styles/breakpoints";

const { widthSmall, widthMedium } = breakpoints;

const headingSizes = ({ size, isFixedSize }) => {
  const sizes = {
    xl: css`
      font-size: ${isFixedSize ? "3.375rem" : "1.75rem"};
      line-height: ${isFixedSize ? "4rem" : "2.25rem"};

      ${!isFixedSize &&
      css`
        @media (${widthSmall}) {
          font-size: 2.125rem;
          line-height: 2.75rem;
        }

        @media (${widthMedium}) {
          font-size: 3.375rem;
          line-height: 4rem;
        }
      `}
    `,
    l: css`
      font-size: ${isFixedSize ? "2.125rem" : "1.5rem"};
      line-height: ${isFixedSize ? "2.75rem" : "2rem"};

      ${!isFixedSize &&
      css`
        @media (${widthSmall}) {
          font-size: 1.75rem;
          line-height: 2.25rem;
        }

        @media (${widthMedium}) {
          font-size: 2.125rem;
          line-height: 2.75rem;
        }
      `}
    `,
    m: css`
      font-size: ${isFixedSize ? "1.75rem" : "1.25rem"};
      line-height: ${isFixedSize ? "2.25rem" : "1.625rem"};

      ${!isFixedSize &&
      css`
        @media (${widthSmall}) {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        @media (${widthMedium}) {
          font-size: 1.75rem;
          line-height: 2.25rem;
        }
      `}
    `,
    s: css`
      font-size: ${isFixedSize ? "1.5rem" : "1.25rem"};
      line-height: ${isFixedSize ? "2rem" : "1.625rem"};

      ${!isFixedSize &&
      css`
        @media (${widthSmall}) {
          font-size: 1.375rem;
          line-height: 1.75rem;
        }

        @media (${widthMedium}) {
          font-size: 1.5rem;
          line-height: 2rem;
        }
      `}
    `,
    xs: css`
      font-size: ${isFixedSize ? "1.375rem" : "1.25rem"};
      line-height: ${isFixedSize ? "1.75rem" : "1.625rem"};
      font-weight: 600;

      ${!isFixedSize &&
      css`
        @media (${widthSmall}) {
          font-size: 1.375rem;
          line-height: 1.75rem;
        }
      `}
    `,
    xxs: css`
      font-size: 1.25rem;
      line-height: 1.625rem;
      font-weight: 600;
    `,
  };

  return sizes[size];
};

const headingTypes = ({ type, size, isFixedSize }) => {
  const types = {
    heavy:
      size === "xl" &&
      ((isFixedSize &&
        css`
          font-weight: 800;
        `) ||
        css`
          @media (${widthMedium}) {
            font-weight: 800;
          }
        `),
  };

  return types[type];
};

const Heading = styled.h1`
  label: Heading;

  font-weight: 500;
  text-rendering: optimizeLegibility;

  ${headingSizes}
  ${headingTypes}
`;

export default Heading;
