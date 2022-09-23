import './SearchWidget.scss';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const SearchWidget = () => {
    return (
        <div className="searchWidget">
            <div className="property-search-header">
                <h3>Find Your Future Home</h3>
            </div>
            <div className="property-search-body">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="control">
                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" size={'small'} />
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control">
                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="Location" variant="outlined" size={'small'} />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormControl fullWidth size={'small'}>
                                <InputLabel>Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Age"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-6">
                            <FormControl fullWidth size={'small'}>
                                <InputLabel>Age 2</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Age"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="checkbox-property">
                                <FormControlLabel control={<Checkbox />} label="Air Conditioning" />
                                <FormControlLabel control={<Checkbox />} label="Swimming Pool" />
                                <FormControlLabel control={<Checkbox />} label="Gym" />
                                <FormControlLabel control={<Checkbox />} label="Central Heating" />
                                <FormControlLabel control={<Checkbox />} label="Laundry Room" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="control">
                                <button type="submit">Search Property</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchWidget;