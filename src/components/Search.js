import React, { useState } from "react";
import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles,
    makeStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { globalSearch } from "../store/_actions/user_actions";


function Search() {
    const dispatch = useDispatch();
    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleChange = (event) => {
        console.log(event.target.value);
        dispatch(globalSearch(+event.target.value));
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const handleClick = () => {
        // TODO: Clear the search input
        console.log("clicked the clear icon...");
    };

    return (
        <div id="app">
            <FormControl fullWidth>
                <TextField
                    size="small"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),

                        startAdornment: (
                            <InputAdornment
                                position="end"
                                style={{ display: showClearIcon }}
                                onClick={handleClick}
                            >
                            </InputAdornment>
                        )
                    }}
                />
            </FormControl>
        </div>
    );
};

export default Search;
