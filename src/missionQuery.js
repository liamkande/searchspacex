import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Mission from "./mission"

let previousResponse = null

const Launches = props => (
  <Query
    query={gql`
          query {
            launches(
              find: {
                mission_name: "${props.missionname}",
                launch_year: "${props.launchyear}",
                rocket_name: "${props.rocketname}"
              }
            ) {
              mission_name,
              upcoming,
              rocket {
                rocket_name
              }
              launch_date_utc
              links {
                video_link
              }
            }
          }
        `}
  >
    {({ loading, error, data }) => {
     
      if (loading && previousResponse !== data)
        return <p>Loading....</p>
      if (error) return <p>Something went wrong...</p>
      previousResponse = data
      return (
        <div className="row">
          {data.launches.length ? (
            <div>
              {
                <p className="results">
                  {data.launches.length} Results Found
                </p>
              }
              {data.launches.map((launch, index) => (
                <Mission key={index} launch={launch} />
              ))}
            </div>
          ) : (
            <p>Sorry! No found results for your search. Please try again...</p>
          )}
        </div>
      );
    }}
  </Query>
);

export default Launches
