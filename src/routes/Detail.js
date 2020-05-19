import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      title
      medium_cover_image
      rating
      summary
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  padding: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  width: 60%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Rating = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Summary = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-color: transparent;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export default () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: id },
  });
  if (loading) {
    return (
      <Container>
        <Column>
          <Title>Loading...</Title>
        </Column>
      </Container>
    );
  }
  return (
    <Container>
      <Column>
        <Title>{data.movie.title}</Title>
        <Rating>Rating: {data.movie.rating}</Rating>
        <Summary>{data.movie.summary}</Summary>
      </Column>
      <Poster bg={data.movie.medium_cover_image}></Poster>
    </Container>
  );
};
