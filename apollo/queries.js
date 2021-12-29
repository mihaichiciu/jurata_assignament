import { gql } from '@apollo/client';

export const GET_ANSWER = gql`
  query Answer($body: String!) {
    query(body: $body) @rest(path: "", method: "POST", bodyKey: "body") {
      answer
      image
      url
    }
  }
`;
