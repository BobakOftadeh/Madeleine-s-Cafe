import styled from 'styled-components';
import ReservationBg from '../../images/cafe2.jpg';

export const ReservationsWrapper = styled.section`
  background-image: linear-gradient(
      rgba(57, 62, 70, 0.7),
      rgba(57, 62, 70, 0.7)
    ),
    url(${ReservationBg});
  background-position: center;
  background-attachment: fixed;
  display: grid;
  padding: 15rem;
  grid-template-columns: repeat(auto-fit, minmax(53rem, max-content));
  grid-gap: 14rem;
  place-content: center;
  place-items: center;

  @media only screen and (max-width: 1000px) {
    grid-gap: 4rem;
  }

  @media only screen and (max-width: 600px) {
    background-position: right bottom;
  }

  h3 {
    color: white;
    text-align: center;
    font-size: 4rem;
  }

  a {
    padding: 1rem 0;
    display: inline-block;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 1rem;
    height: 5rem;
    width: 20rem;
    border: 0.2rem solid white;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      background-color: var(--color-primary-dark);
      border: 0.2rem solid var(--color-primary-dark);
    }

    &:active {
      transform: translateY(0px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    }
  }
`;