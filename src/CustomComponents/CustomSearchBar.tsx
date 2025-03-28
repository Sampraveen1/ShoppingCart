import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';


interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}


const CustomSearchBar: React.FC<SearchBarProps> = ({ searchValue, setSearchValue }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder='Search...'
      sx={{
        width: { xs: 180, sm: 180, md: 250 },
        borderRadius: 25,
        backgroundColor: "#F1F1F1",
        "&.MuiOutlinedInput-root": {
          borderRadius: 25,
          "& fieldset": { border: 'none' },
          "&:hover fieldset": { border: '2px solid #ccc' },
          "&.Mui-focused fieldset": { border: "none" },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}

    />

  )
}

export default CustomSearchBar;