import { Button, Modal, Typography,Paper,Box} from "@material-ui/core";
import styles from "./Button.module.css"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React from "react";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const currencies = [
  {
    value: 'USD',
    label: 'US Dollar',
  },
  {
    value: 'EUR',
    label: 'EURO',
  },
  {
    value: 'BTC',
    label: 'Bitcoin',
  },
  {
    value: 'JPY',
    label: 'Yen',
  },
];

export function Components() {
 const [checked, setChecked] = React.useState(true);
  const [currency, setCurrency] = React.useState('EUR');

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange = (event) => {
      setChecked(event.target.checked);
      
    };
    const [modal, setModal] = React.useState(false);
    return <>
        <Box>
            <Box>
            <Button onClick={()=>{setModal(true)}} className={styles.myButton} variant="outlined" color="primary" size="large">Show Modal</Button>
        </Box>
            <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
        </Box>
        
        <Typography variant="h1">My App</Typography>
        <Modal open={modal}>
            <Paper>
                <Box>
                    <Typography variant="h3">hello</Typography>
                </Box>
                <Box>
            <Button onClick={()=>{setModal(false)}} className={styles.myButton} variant="outlined" color="primary" size="large">Close</Button>
        </Box>
            </Paper>
        </Modal>
        <Box>
            <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Typography variant="p">MERN STACK</Typography>
        </Box>
        <Box>
            <Checkbox
                checked
                defaultChecked
                color ="primary"
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
            <Typography variant="p">Developer</Typography>
        </Box>
        <Box>
            <TextField id="standard-basic" label="Username" />
        </Box>
        <Box>
             <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleCurrency}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
        <Box>
            <Button startIcon={<CloudUploadIcon />} className={styles.myButton} variant="outlined" color="primary" size="large">Save</Button>
        </Box>
    </>
}