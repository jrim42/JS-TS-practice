const quotes = [
    {
        quote: "AAAAAAAAAA",
        author: "aaaaaaaaaa",
    },
    {
        quote: "BBBBBBBBBB",
        author: "bbbbbbbbbb",
    },
    {
        quote: "CCCCCCCCCC",
        author: "cccccccccc",
    },
    {
        quote: "DDDDDDDDDD",
        author: "dddddddddd",
    },
    {
        quote: "EEEEEEEEEE",
        author: "eeeeeeeeee",
    },
    {
        quote: "FFFFFFFFFF",
        author: "ffffffffff",
    },
    {
        quote: "GGGGGGGGGG",
        author: "gggggggggg",
    },
    {
        quote: "HHHHHHHHHH",
        author: "hhhhhhhhhh",
    },
    {
        quote: "IIIIIIIIII",
        author: "iiiiiiiiii",
    },
    {
        quote: "JJJJJJJJJJ",
        author: "jjjjjjjjjj",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteOfDay = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quoteOfDay.quote;
author.innerText = quoteOfDay.author;