import { useState } from "react";
import { toast } from "react-toastify";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Самурай! Напиши запрос!");
      return;
    }
    onSubmit(query);

    setQuery("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleQuerySubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
}

// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleQueryChange = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   handleQuerySubmit = event => {
//     event.preventDefault();

//     if (this.state.query.trim() === '') {
//       toast.error('Самурай! Напиши запрос!');
//       return;
//     }
//     this.props.onSubmit(this.state.query);

//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleQuerySubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleQueryChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
