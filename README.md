# Project Overview

## Project Links

- [https://github.com/brian99na/project-2](https://github.com/brian99na/project-2)
- [https://brian99na.github.io/project-2/](https://brian99na.github.io/project-2/)

## Project Description

This project is focused around the use of a cryptocurrency API that allows people to calculate how much their investment would be worth from a certain date until now.It will also feature a component that compares their investment to the rate of inflation.
Both investment strategies will have their own page with more options and their own visual charts.

This project is centered around utilizing React hooks & routes, and also making API calls.

[See my full history of commits on my original repository for this project](https://github.com/brian99na/project-2) 
(I wanted to refactor a lot of my states into objects and clean up my CSS, so I decided to restart. In hindsight, I don't recommend this)

## APIs

CoinGecko API - this API has options for current market data as well as the historical data which can be retrieved through different parameters.

```
GET: https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-03-2016&localization=false

{
"id": "bitcoin",
"symbol": "btc",
"name": "Bitcoin",
"image": {
	"thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
	"small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
	},
"market_data": {},
"community_data": {},
"developer_data": {},
"public_interest_stats": {
	"alexa_rank": 12489,
	"bing_matches": null
	}
}
```
Nasdaq Inflation Rate Data API - this API returns CPI data on a monthly interval.
```
GET https://data.nasdaq.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=supersecretkey

{
"dataset": {
"id": 11319885,
"dataset_code": "CPI_USA",
"database_code": "RATEINF",
"name": "Consumer Price Index - USA",
"description": "Please visit <a href=http://www.rateinflation.com/inflation-information/calculate-inflation>http://www.rateinflation.com/inflation-information/calculate-inflation</a> for more information.",
"refreshed_at": "2021-11-27T02:03:19.519Z",
"newest_available_date": "2021-10-31",
"oldest_available_date": "1913-01-31",
"column_names": [
"Date",
"Value"
],
"frequency": "monthly",
"type": "Time Series",
"premium": false,
"limit": null,
"transform": null,
"column_index": null,
"start_date": "1913-01-31",
"end_date": "2021-10-31",
"data": [],
"collapse": null,
"order": null,
"database_id": 1034
}
}
```


## Wireframes

- [Mobile and Desktop Wireframes](https://www.figma.com/file/nVvxhFwbIqFPyypM3msA2z/Untitled?node-id=0%3A1)


### MVP/PostMVP

Minimum Viable Product - This is a way of keeping track of what I *need* to get done for this website to get off its feet.

#### MVP
- Calling both APIs and storing data in states.
- Create a modular calculator function for both inflation and crypto data.
- Set up routes and links that lead to investment strategy pages.
- Set up controlled forms that take in user inputs. 
- Utilize multiple components for different parts of the page.
- CSS Styling

#### PostMVP

- Uncontrolled Input for Crypto Search Up
- Create stylized 3D animated art to replace images.
- Parallax Effect with BG images/image sequences
- Area Charts using Recharts
- Skeleton visuals for loading data

## Components

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content |
| Homepage | Contains a form to immediately start typing an amount | 
| Price | A component that takes the homepage information and calculates the current investment price with the ability to change the coin and date |
| SecondStrat | Another component that calculates with the given date another price through another investment strategy |
| Price Details | Links to its own page and gives greater details on the current price |
| SecondStrat Details | Same as price details |


| To Do's | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Create Required Components, setup routes and links | H | 1hr | 1hr | 
| Create Homepage (Call APIs, save data to states, useEffect chaining, passing props) | H | 15hrs | > 30hrs | 
| Create Price & Inflation Component (Calculate current price, add inputs/form, jsx)| H | 15hrs | > 30hrs | 
| Responsiveness, Styling | M | 5hrs | 10hrs | 
| Recharts Graphs | L | 5hrs | 10hrs | 
| Total | H | 14hrs | > 81 hrs |

#Reflection

 I found that as I worked through the project, my understanding of React and the way it renders pages grew tremendously. One of my most common errors was 
```
cannot read properties of Undefined
```
which came whenever I wanted to dive deeper into an objects data. Here's an example:
```
inflation.data[indexValue][1]
```
I found that through conditional rendering and daisy chaining multiple useEffects to trigger functions was an effective way of making sure information loaded in the correct order.
```
  useEffect(() => {
    inflationApiCall()
    currentApiCall()
    oldApiCall()
    document.title = "What if?"
  }, [])

  useEffect(() => {
    cryptoCalculator()
    inflationCalculator()
  }, [mainData.inputPrice])
```

###Favorite pieces of code
Something that I'll be consistently using in the future when working with React is conditional rendering and ternary operators in tandem with states.

```
const [jsx, setJsx] = useState(false);

const inflationJSX = jsx &&
      <div className={jsx ? 'inflationJsx' : 'invisible'} ref={inflationRef}></div>

{jsx ? inflationJSX : loadingJSX}
```
I found that useStates with booleans are incredibly helpful when used with conditional rendering, as they can control whether the JSX will be displayed or not. In my case, I set it so that if the submit button was clicked, the results JSX would be set to true and it would become visible. It is also helpful when adding classes to items so that CSS transitions could become possible. 