const express = require("express");
const app = express();

const port = 3000; // or any other port you prefer

const fetchData = async () => {
  const url =
    "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d79c54434fmshb2510432f27840cp180d48jsnef22cbb51777",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it later if needed
  }
};

app.get("/api-data", async (req, res) => {
  try {
    const data = await fetchData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
