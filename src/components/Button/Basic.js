import Button from '@mui/material/Button';

const BasicButton = () => {
  return (
    <>
      <div>
        <Button variant="text">Text</Button>
        <Button disabled>Disabled</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>
    </>
  );
}

export default BasicButton;
