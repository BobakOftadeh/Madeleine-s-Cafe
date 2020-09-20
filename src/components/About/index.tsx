import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: var(--color-primary-pale);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5rem;
  color: var(--color-primary-dark);

  .photo {
    display: block;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100%;
    z-index: 998;
  }

  .about-food {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    > * {
      margin: 0 9rem;
    }

    @media only screen and (max-width: 1200px) {
      text-align: center;
      flex-direction: column;
      > * {
        margin: 0;
      }
    }
  }

  .about-resturant {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > * {
      margin: 0 9rem;
    }

    @media only screen and (max-width: 1200px) {
      text-align: center;
      flex-direction: column;
      > * {
        margin: 0;
      }
    }
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.6rem;
    width: 30rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 1200px) {
      width: 43rem;
    }
  }

  p {
    font-size: 1.8rem;
    width: 40rem;
  }
`;

const PhotoContainer = styled.div`
  width: 50rem;

  @media only screen and (max-width: 1200px) {
    max-width: 40rem;
    order: -1;
    margin-bottom: 5rem !important;
    margin-top: 5rem !important;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <div className="about-food">
        <PhotoContainer>
          <img
            src={require('../../images/cafe1.jpg')}
            alt="food plate"
            className="photo"
          />
        </PhotoContainer>
        <div>
          <h2>Enjoyable place for all the family</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
        </div>
      </div>
      <div className="about-resturant">
        <div>
          <h2>The most locally sourced food</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            repellat praesentium optio incidunt sed molestiae dolore sint
            maiores
          </p>
        </div>
        <PhotoContainer>
          <img
            src={require('../../images/cafe3.jpg')}
            alt="food plate"
            className="photo"
          />
        </PhotoContainer>
      </div>
    </AboutWrapper>
  );
};

export default About;
