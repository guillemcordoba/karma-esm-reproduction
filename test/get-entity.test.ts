import { ApolloClient, gql, InMemoryCache } from "apollo-boost";

describe("basic GraphQl getEntity", () => {
  it("graphql loads and entity given its id", async () => {
    const client: ApolloClient<any> = new ApolloClient({
      cache: new InMemoryCache()
    });
  });
});
