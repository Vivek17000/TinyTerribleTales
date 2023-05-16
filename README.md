# Vivek Sharma -------- Registration Number - 12016744 

![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/6e04358c-015c-48ab-8ba4-4d00393ec537)


# Submitted To :-
# Tiny Terrible Tales

 ## `Deployed Link` : (https://tiny-terrible-tales.netlify.app/)


# Libraries Used

### 1. `react-csv`

React-CSV is a library for generating and downloading CSV (Comma-Separated Values) files in React applications. It provides a simple API to create CSV data from arrays or objects and offers options for customization. With React-CSV, you can easily convert data into CSV format and provide users with the ability to download the generated file. It offers components like CSVLink and CSVDownload to facilitate this functionality. The CSVLink component allows you to create a link or button that, when clicked, triggers the download of a CSV file. You can pass an array or object as the data prop, representing the content of the CSV file. React-CSV provides various options to customize the generated CSV file, including the ability to specify the filename, delimiter, encoding, headers, and more.The library is straightforward to install using npm or yarn, and the API is intuitive and easy to use. By incorporating React-CSV into your React application, you can provide users with the ability to download CSV files for data export or other purposes.

### 2. `recharts`

Recharts is a popular charting library for React that provides a wide range of highly customizable and interactive charts. It leverages the power of D3.js under the hood and offers a declarative API, making it easy to create beautiful and responsive charts in React applications. With Recharts, you can create various types of charts, including line charts, bar charts, area charts, pie charts, scatter charts, and more. It supports both static and dynamic data visualization and provides numerous options for customizing the appearance and behavior of charts. Recharts components are highly configurable, allowing you to control aspects such as axis labels, tooltips, legends, colors, gradients, animations, and responsiveness. The library also supports responsive design, enabling your charts to adapt to different screen sizes and devices. Integrating Recharts into your React application is straightforward. You can install it using npm or yarn and then import the necessary components into your code. You can pass your data to the chart components and configure them using props.

### 3. `react-router-dom`

React Router DOM is a library used in React applications for handling routing. It allows you to define routes and navigate between different components or pages within a single-page application (SPA) without reloading the entire page. It provides components like <BrowserRouter>, <Route>, <Link>, and <Redirect> to manage routing in a declarative way. React Router DOM is widely used in the React ecosystem for web application routing.

# Components Used

## 1. App.js


![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/be0e4702-2e36-409d-b1e2-eeff6815a2f3)

- The main part of the code related to React Router DOM is wrapped within the `<BrowserRouter>` component. This component is responsible for providing routing functionality to the application.

- Inside the `<BrowserRouter>`, there is a `<Routes>` component, which is used to define the routes of the application. The `<Routes>` component is where you specify the different paths and their associated components.

#### In this example, two routes are defined:

- The first route is specified using `<Route>` with the path prop set to `"/"`. This means that when the URL path matches "/", the component `<Front/>` will be rendered. The element prop is used to specify the component to be rendered for this route.

- The second route is specified using `<Route>` with the path prop set to `"/fetch"`. This means that when the URL path matches `"/fetch"`, the component `<Fetch/>` will be rendered.

- The `<Route>` component allows you to define the relationship between paths and components. It determines which component should be rendered based on the current URL path.

By setting up these routes, you can navigate between the `<Front/>` and `<Fetch/>` components within the application using the corresponding URLs `("/" and "/fetch" respectively)`. React Router DOM takes care of rendering the appropriate component based on the URL path and manages the navigation without requiring a full page reload.



## 2. Front.js

![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/4689e93d-0a01-453a-ac96-2578aa9c8058)

The code snippet represents a container div containing a button, styled with the class "my-button". The button is wrapped within a React Router DOM <Link> component, which creates a hyperlink. Clicking the button will navigate to the "/fetch" route in the application without refreshing the entire page.


## 3. Fetch.js
 
 So, this is our main component in the whole project

 So lets divide the whole project into diffent parts

 ## Inside UseEffect
  
 ![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/bd796485-df2f-41f9-af67-7d2b666238ed)
  

 The code snippet demonstrates the usage of the useEffect hook to fetch data from a specific URL and process it to determine the frequency of words in the text. Let's break it down:

 #### 1. The effect function starts with an async function declaration named fetchData. This function fetches the content of the provided URL `(https://www.terriblytinytales.com/test.txt)` using the fetch function. It awaits the response and then converts it to text using the `response.text()` method.

#### 2. The fetched text is then processed to determine the word frequency. The text is trimmed and converted to lowercase using `.trim().toLowerCase()`. It is then split into an array of words using `.split(/\s+/)`.

#### 3. A wordFreq object is created to store the frequency of each word. A for...of loop iterates through each word and updates the corresponding frequency in the wordFreq object.

#### 4.  The wordFreq object is then transformed into an array using `Object.entries()`. It is sorted in descending order based on the frequency using the `.sort() `method. The top 20 entries are selected using `.slice(0, 20)`. Finally, the array is mapped to an object structure containing the `word`, `frequency`, and `index`.

#### 5. The resulting sortedWords array is set as the state using `setParsedData`, which  is a state setter function for a state variable named parsedData.

#### 6. Finally, the `fetchData` function is invoked within the effect. Since an `empty dependency array []` is provided as the second argument to useEffect, the effect will only run once, after the initial render.

In summary, this useEffect fetches the content of a URL, processes the text to determine word frequencies, and sets the resulting data as state. It runs once after the component mounts and does not have any dependencies that trigger re-execution.



## Barchart from Recharts
  
![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/ceb9aa47-9f35-43e3-b95a-f827898f9991)
  

The code snippet represents a Bar Chart component rendered using the Recharts library. Let's go through the code:

#### 1. `<BarChart>`: This component is the main container for the bar chart. It receives several props to configure its appearance and behavior, such as width and height for setting the dimensions, data to provide the chart's data, and barCategoryGap to control the gap between the bars.

#### 2. `<CartesianGrid>`: This component represents the grid lines on the chart. It receives the prop strokeDasharray to specify the pattern of dashed lines.

#### 3. `<XAxis>`: This component represents the x-axis of the chart, which displays the categories or labels for each bar. It receives the prop dataKey set to "word" to indicate which property of the data object to use for the x-axis values. Other props like interval, textAnchor, tick, and padding are used for styling and configuration of the x-axis.

#### 4. `<YAxis>`: This component represents the y-axis of the chart, which displays the values or frequencies of the bars. It receives the prop tick for styling the y-axis ticks.

#### 5.`<Tooltip>`: This component displays tooltips when hovering over the bars, providing additional information about the data. It is a built-in feature of Recharts.

#### 6. `<Legend>`: This component displays a legend for the chart, indicating the meaning of different colors or series. It is also a built-in feature of Recharts.

#### 7. `<Bar>`: This component represents each individual bar in the chart. It receives the prop dataKey set to "frequency" to indicate which property of the data object to use for the bar heights or values. Other props like fill, stroke, and strokeWidth are used for styling the bars.

Overall, the code renders a bar chart using the Recharts library, visualizing the provided data (parsedData). The chart displays the word frequencies on the x-axis and the corresponding frequencies on the y-axis, with each bar representing a word.


## Converting data to CSV format
  
 ![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/e7fd7bb7-8124-4462-a1f6-f5f61f3da4a1)

  
  ![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/5936ea6d-42e4-45d2-a0b8-acff321ce917)
  
  
  In the provided code snippet, there are additional variables defined (headers, filename, and csvData), which are then used with the <CSVLink> component to export data as a CSV file. Let's explain it further:

#### 1. `const headers`: This variable is an array of objects that define the headers for the CSV file. Each object represents a column in the CSV, with the label property specifying the header text, and the key property indicating the corresponding data key in the csvData array.

#### 2. `const filename`: This variable stores the desired filename for the exported CSV file. In this case, it is set to "TTT-histogram.csv".

 #### 3. `const csvData`: This variable maps the parsedData array to a new array of objects suitable for CSV export. Each object in the new array has properties "0" and "1", which correspond to the word and frequency data of each row in parsedData, respectively.

#### 4. `<CSVLink>`: This component from the react-csv library generates a download link for exporting data as a CSV file. It receives several props:

---- `data`: The csvData variable is passed as the data prop, representing the data to be exported.
---- `headers`: The headers variable is passed as the headers prop, specifying the column headers for the CSV file.
---- `filename`: The filename variable is passed as the filename prop, determining the name of the exported CSV file.
  
#### 5. `<button>` and `<span>`: These HTML elements represent a button with the label "EXPORT" inside it. They serve as the trigger for initiating the CSV export.

In summary, when the "EXPORT" button is clicked, the <CSVLink> component generates a download link that allows the user to export the data provided in csvData as a CSV file. The exported CSV file will have two columns: "Word" and "Frequency" based on the headers defined in the headers array, and it will be saved with the filename "TTT-histogram.csv".
  


# Output ScreenShots 

![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/a977d92e-e431-48d4-8663-cb5e32977dc8)
![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/fe38c60f-7be4-48e9-bb23-0f76416ffda0)
![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/2fb06c7f-3836-4327-9574-38ab8fff9182)
![image](https://github.com/Vivek17000/TinyTerribleTales/assets/114663317/0f2a2c63-e5ab-4f41-8326-b2f5d6389d07)
