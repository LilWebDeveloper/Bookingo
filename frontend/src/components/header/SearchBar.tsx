import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Search as SearchIcon } from "@mui/icons-material";
import classes from "../../styles/SearchBar.module.css";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([
    "Strzyżenie męskie",
    "Manicure hybrydowy",
    "Strzyżenie",
    "Farbowanie włosów",
    "Przedłużanie rzęs",
  ]);

  const handleSearchChange = (_event: any, newValue: string) => {
    setSearchTerm(newValue);
  };

  return (
    
      <Autocomplete
        className={classes.searchBar}
        freeSolo
        options={suggestions}
        onInputChange={handleSearchChange}
        renderInput={(params) => (
          <TextField
            className={classes.textField}
            {...params}
            margin="normal"
            variant="outlined"
            placeholder="Szukaj usług lub biznesów"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <SearchIcon />
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
      />

  );
};

export default SearchBar;
