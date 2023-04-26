import { ChangeEvent, FormEvent } from "react";
import Arrow from "../assets/icon-arrow.svg";

interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}

export const Search = ({ onChange, onSubmit, placeholder }: SearchProps) => {
  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="h-8 w-96  px-8 py-6 outline-none rounded-l-md text-black"
        onChange={onChange}
        placeholder={placeholder}
      />
      <button className="bg-very-dark-gray h-8 px-6 flex rounded-r-md items-center py-6 hover:bg-dark-gray duration-300">
        <img src={Arrow} alt="Arrow Icon" />
      </button>
    </form>
  );
};
