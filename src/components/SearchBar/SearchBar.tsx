import toast, { Toaster } from "react-hot-toast";
import { useState, ChangeEvent, FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={css.searchInput}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}
