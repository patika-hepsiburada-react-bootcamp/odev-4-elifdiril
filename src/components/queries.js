import { gql } from '@apollo/client';

export const WEATHER_QUERY = gql`
query cityWeather($name:String!) {
    getCityByName(name: $name) {
        name
        weather {
          temperature {
            actual
          }
          summary {
            description icon
          }
          wind {
            speed
          }
          clouds {
            humidity
          }
        }
    }
  }
`;