import styled from 'styled-components'
import { pixelToRem } from '@styles/pxToRem'
import { device } from '@styles/responsive'

export const Container = styled.div`
  max-width: ${pixelToRem(1360)};
  width: 100%;
  margin: 0 auto;
  padding: ${pixelToRem(40)} 0;

  @media ${device.mobileS} {
    padding: ${pixelToRem(20)}
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${pixelToRem(70)};

  @media ${device.mobileS} {
    margin-bottom: ${pixelToRem(35)};
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;

  & span {
    width: ${pixelToRem(50)};
    height: ${pixelToRem(5)};
    border-radius: 4px;
    background: var(--white);

    &:nth-child(3) {
      width: ${pixelToRem(35)};
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobileS} {
    flex-direction: column;
  }
`

export const Resume = styled.div`
  width: ${pixelToRem(455)};

  @media ${device.mobileS} {
    width: 100%;
    text-align: center;
    margin-bottom: ${pixelToRem(30)};

    & .luca {
      width: 100%;
    }
  }

  & span {
    display: block;
    margin: ${pixelToRem(10)} 0;
    font-size: ${pixelToRem(20)};

    @media ${device.mobileS} {
      font-size: ${pixelToRem(14)};
    }
  }

  & p {
    font-size: ${pixelToRem(20)};
    font-weight: 400;
    line-height: 32px;
    margin-bottom: ${pixelToRem(20)};

    @media ${device.mobileS} {
      font-size: ${pixelToRem(14)};
    }
  }

  & button {
    width: ${pixelToRem(250)};
    height: ${pixelToRem(70)};
    border-radius: 40px;
    background: linear-gradient(154.23deg, #0F3A7B -58.45%, #0CFFFF 374.49%);
    border: 0;
    font-size: ${pixelToRem(20)};
    color: var(--white);
  }
`

export const Trailers = styled.div`
  max-width: ${pixelToRem(230)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${device.mobileS} {
    max-width: 100%;
    display: none;
  }

  & h1 {
    font-weight: 700;
    font-size: ${pixelToRem(24)};
    margin-bottom: ${pixelToRem(30)};
  }
`

export const CardTrailer = styled.div`
  margin-bottom: ${pixelToRem(30)};
  max-width: ${pixelToRem(365)};
  width: 100%;
  min-height: ${pixelToRem(120)};
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  @media ${device.mobileS} {
    min-height: ${pixelToRem(170)};
  }

  & span {
    display: block;
    padding: ${pixelToRem(5)} ${pixelToRem(10)}
  }

  & strong {
    padding: ${pixelToRem(5)} ${pixelToRem(10)};
    margin-bottom: ${pixelToRem(5)};
  }

  & img {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -1;
  }
`