import styled from 'styled-components';

export const CardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: var(--lens-ui-elements-card-backgrounds-default-background-color);
  color: var(--lens-ui-elements-card-backgrounds-default-color);
  background-clip: border-box;
  border: 0 solid var(--lens-ui-elements-card-backgrounds-default-border-color);
  border-radius: var(--lens-ui-elements-card-border-radius);
  box-shadow: var(--lens-ui-elements-card-box-shadow);
  box-sizing: border-box;
  overflow: hidden;

  &.bg-primary {
    background-color: var(--lens-ui-elements-card-backgrounds-primary-background-color);
    background-clip: border-box;
    border: 0 solid var(--lens-ui-elements-card-backgrounds-primary-border-color);

    .lens-ui-card__title {
      color: var(--lens-ui-elements-card-backgrounds-primary-card-title-color);
    }

    .lens-ui-card__subtitle {
      color: var(--lens-ui-elements-card-backgrounds-primary-card-sub-title-color);
    }

    .lens-ui-card__text {
      color: var(--lens-ui-elements-card-backgrounds-primary-color);
    }

    .lens-ui-card__link {
      color: var(--lens-ui-elements-card-backgrounds-primary-card-link-color);

      &:hover {
        color: var(--lens-ui-elements-card-backgrounds-primary-card-link-hover-color);
      }
    }
  }

  &.bg-secondary {
    background-color: var(--lens-ui-elements-card-backgrounds-secondary-background-color);
    background-clip: border-box;
    border: 0 solid var(--lens-ui-elements-card-backgrounds-secondary-border-color);

    .lens-ui-card__title {
      color: var(--lens-ui-elements-card-backgrounds-secondary-card-title-color);
    }

    .lens-ui-card__subtitle {
      color: var(--lens-ui-elements-card-backgrounds-secondary-card-sub-title-color);
    }

    .lens-ui-card__text {
      color: var(--lens-ui-elements-card-backgrounds-secondary-color);
    }

    .lens-ui-card__link {
      color: var(--lens-ui-elements-card-backgrounds-secondary-card-link-color);

      &:hover {
        color: var(--lens-ui-elements-card-backgrounds-secondary-card-link-hover-color);
      }
    }
  }

  &.bg-success {
    background-color: var(--lens-ui-elements-card-backgrounds-success-background-color);
    background-clip: border-box;
    border: 0 solid var(--lens-ui-elements-card-backgrounds-success-border-color);

    .lens-ui-card__title {
      color: var(--lens-ui-elements-card-backgrounds-success-card-title-color);
    }

    .lens-ui-card__subtitle {
      color: var(--lens-ui-elements-card-backgrounds-success-card-sub-title-color);
    }

    .lens-ui-card__text {
      color: var(--lens-ui-elements-card-backgrounds-success-color);
    }

    .lens-ui-card__link {
      color: var(--lens-ui-elements-card-backgrounds-success-card-link-color);

      &:hover {
        color: var(--lens-ui-elements-card-backgrounds-success-card-link-hover-color);
      }
    }
  }

  &.bg-info {
    background-color: var(--lens-ui-elements-card-backgrounds-info-background-color);
    background-clip: border-box;
    border: 0 solid var(--lens-ui-elements-card-backgrounds-info-border-color);

    .lens-ui-card__title {
      color: var(--lens-ui-elements-card-backgrounds-info-card-title-color);
    }

    .lens-ui-card__subtitle {
      color: var(--lens-ui-elements-card-backgrounds-info-card-sub-title-color);
    }

    .lens-ui-card__text {
      color: var(--lens-ui-elements-card-backgrounds-info-color);
    }

    .lens-ui-card__link {
      color: var(--lens-ui-elements-card-backgrounds-info-card-link-color);

      &:hover {
        color: var(--lens-ui-elements-card-backgrounds-info-card-link-hover-color);
      }
    }
  }

  &.bg-warning {
    background-color: var(--lens-ui-elements-card-backgrounds-warning-background-color);
    background-clip: border-box;
    border: 0 solid var(--lens-ui-elements-card-backgrounds-warning-border-color);

    .lens-ui-card__title {
      color: var(--lens-ui-elements-card-backgrounds-warning-card-title-color);
    }

    .lens-ui-card__subtitle {
      color: var(--lens-ui-elements-card-backgrounds-warning-card-sub-title-color);
    }

    .lens-ui-card__text {
      color: var(--lens-ui-elements-card-backgrounds-warning-color);
    }

    .lens-ui-card__link {
      color: var(--lens-ui-elements-card-backgrounds-warning-card-link-color);

      &:hover {
        color: var(--lens-ui-elements-card-backgrounds-warning-card-link-hover-color);
      }
    }
  }

  &.bg-danger {
    background-color: var(--lens-ui-elements-card-backgrounds-danger-background-color);
    background-clip: border-box;
    border: 0 solid var(--lens-ui-elements-card-backgrounds-danger-border-color);

    .lens-ui-card__title {
      color: var(--lens-ui-elements-card-backgrounds-danger-card-title-color);
    }

    .lens-ui-card__subtitle {
      color: var(--lens-ui-elements-card-backgrounds-danger-card-sub-title-color);
    }

    .lens-ui-card__text {
      color: var(--lens-ui-elements-card-backgrounds-danger-color);
    }

    .lens-ui-card__link {
      color: var(--lens-ui-elements-card-backgrounds-danger-card-link-color);

      &:hover {
        color: var(--lens-ui-elements-card-backgrounds-danger-card-link-hover-color);
      }
    }
  }
`;

export const CardBodyStyle = styled.div`
  flex: 1 1 auto;
  padding: var(--lens-ui-elements-card-elements-card-body-padding);
  box-sizing: border-box;
  color: var(--lens-ui-typography-text-color);
`;

export const CardTextStyle = styled.p`
  margin-top: 0;
  margin: var(--lens-ui-elements-card-elements-card-text-margin);
  box-sizing: border-box;
  color: var(--lens-ui-typography-text-color);
`;

export const CardImageStyle = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  box-sizing: border-box;

  &.image-top {
    border-top-left-radius: var(--lens-ui-elements-card-border-radius);
    border-top-right-radius: var(--lens-ui-elements-card-border-radius);
  }

  &.image-bottom {
    border-bottom-left-radius: var(--lens-ui-elements-card-border-radius);
    border-bottom-right-radius: var(--lens-ui-elements-card-border-radius);
  }
`;

export const CardTitleStyle = styled.h4`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: .5rem;
  color: var(--lens-ui-elements-card-backgrounds-default-card-title-color);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: .5rem;
  color: var(--lens-ui-typography-text-color);
`;

export const CardSubTitleStyle = styled.h6`
  margin-top: -var(--lens-ui-elements-card-border-radius);
  margin-bottom: 0;
  font-weight: 500;
  line-height: 1.2;
  font-size: .875rem;
  color: var(--lens-ui-elements-card-backgrounds-default-card-sub-title-color);
  box-sizing: border-box;
  color: var(--lens-ui-typography-text-color);
`;

export const CardLinkStyle = styled.a`
  text-decoration: none;
  color: var(--lens-ui-elements-card-backgrounds-default-card-link-color);
  cursor: pointer;
  user-select: none;
  padding: .47rem .75rem;
  font-size: .875rem;
  color: var(--lens-ui-typography-text-color);

  &:hover {
    color: var(--lens-ui-elements-card-backgrounds-default-card-link-hover-color);
    text-decoration: underline;
  }
`;
