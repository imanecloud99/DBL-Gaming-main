import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router'

import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Modal,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControle from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const Selector = ({ handleKeyPress, search, setSearch }) => {

    const [sort, setSort] = React.useState('');
    const handleChange = (event) => {
        setSort(event.target.value);
    };

    const useStyles = makeStyles((theme) => ({
        input: {
          background: 'white',
          borderRadius: 3,
          padding: 2,
          paddingLeft: 12,
        },
        iconButton: {
            padding: 4,
            borderRadius: 3,
            border: 0,
            color: 'white',
        },

      }));

    const classes = useStyles();
  return (
    <>
      <div className="customShow">
        <div className="filter">
          <label htmlFor="">Filter By:</label>
          <InputGroup
            className="mb-3"
            onKeyDown={handleKeyPress}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          >
            <Button variant="outline-secondary" id="button-addon1">
              <i className="fa fa-search"></i>
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Search ..."
            />
          </InputGroup>
        </div>

        <div className="sort">
          <label htmlFor="">Sort by:</label>

          <FormControle required>
              <NativeSelect
            className={classes.input}
            id="demo-customized-select-native"
            value={sort}
            onChange={handleChange}>
            <option value={10} default>Recommand For You</option>
            <option value={20}>Viewers (High to Low) </option>
            <option value={30}>Something else here</option>
            </NativeSelect>
          </FormControle>

        </div>

          {/* <Select name="Recommended" placeholder="Recommanded For You"/> */}
      </div>

    </>
  )
}

export default Selector
