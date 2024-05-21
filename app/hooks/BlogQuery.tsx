// useBlogQuery.tsx
import { gql, useQuery } from "@apollo/client";

const BLOG_QUERY = gql`
  query BlogPosts {
    blogs {
      data {
        id
        attributes {
          Title
          SmallDescription
          Image {
            data {
              attributes {
                url
              }
            }
          }
          slug
        }
      }
    }
  }
`;

export const useBlogQuery = () => {
  return useQuery(BLOG_QUERY);
};
