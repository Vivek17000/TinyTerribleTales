import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { CSVLink } from "react-csv";
import "./CSS/Fetch.css"


const Fetch = () => {
  
  const [parsedData, setParsedData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      
      const words = text.trim().toLowerCase().split(/\s+/);
      const wordFreq = {};
  
      for (const word of words) {
        if (wordFreq[word]) {
          wordFreq[word]++;
        } else {
          wordFreq[word] = 1;
        }
      }
    
      const sortedWords = Object.entries(wordFreq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map((entry, index) => ({ word: entry[0], frequency: entry[1], index }));
      
      setParsedData(sortedWords);
    };
    
    fetchData();
  }, []);


  const headers = [
    { label: "Word", key: "0" },
    { label: "Frequency", key: "1" }
  ];

  const filename = "TTT-histogram.csv";
  const csvData = parsedData.map(row => ({ "0": row.word, "1": row.frequency }));

  return (
    <>
      <div className="content">
      <h2 className="glow">Top 20 Most Occuring Words!!</h2>
      
      <BarChart width={1600} height={650} data={parsedData} barCategoryGap={0} >

        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="word" interval={0}  textAnchor="middle"  tick={{ fill: 'aqua', fontSize: 20 }} padding={{left:20,right:20}}  />

        <YAxis  tick={{ fill: 'aqua', fontSize: 12 }}/>

        <Tooltip />
        <Legend />
        <Bar dataKey="frequency"  fill="#232B2B" stroke="rgb(255, 194, 62)" strokeWidth={4} />

      </BarChart>
  
      
      
      <div className="footer">

      <CSVLink data={csvData} headers={headers} filename={filename}>
          <button className="button">
           <span>EXPORT</span>
          </button>
        </CSVLink>

      </div>
      </div>
    </>
  );
};

export default Fetch;
