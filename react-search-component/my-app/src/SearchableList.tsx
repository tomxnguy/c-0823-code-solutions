// import { useState } from 'react';

// export default function SearchableList() {
//   return (
//     <>
//       <SearchBar />
//       <QuoteList />
//     </>
//   );
// }

// function SearchBar() {
//   const [search, setSearch] = useState('');
//   const [filteredQuotes, setFilteredQuotes] = useState(quotes);

//   const handleInput = (e) => {
//     const searchTerm = e.target.value;
//     setSearch(searchTerm);

//     const filteredItems = quotes.filter((quote) =>
//       quote.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredQuotes(filteredItems);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="search"
//         value={search}
//         onChange={handleInput}
//       />
//     </div>
//   );
// }

// function QuoteList() {
//   const quotes = [
//     'Yer a wizard Harry',
//     "I hope you're pleased with yourselves",
//     'It does not do well to dwell on dreams and forget to live',
//     'To the well-organized mind, death is but the next great adventure.',
//     'Youre a little scary sometimes, you know that? Brilliant... but scary',
//     'There will be no foolish wand waving or silly incantations in this class.',
//     'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
//     'If there is one thing Voldemort cannot understand, it is love.',
//     'As much money and life as you could want!',
//   ];

//   const quoteItems = quotes.map((quote) => <li>{quote}</li>);

//   return <ul>{quoteItems}</ul>;
// }
