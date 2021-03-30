import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Missions from "./missionQuery"
import './app.css'
const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
})

export default function searchResults ({missionname, rocketname, launchyear}) {
    return (
        <ApolloProvider client={client}>
        <div className="result-container">
          <Missions
            missionname={missionname}
            rocketname={rocketname}
            launchyear={launchyear}
          />
        </div>
      </ApolloProvider>
    )
}

