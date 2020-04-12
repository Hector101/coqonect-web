import React, { FunctionComponent } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void ;
  isAdmin: boolean;
  name: string;
};

const CustomSwitch: FunctionComponent<Props> = ({handleChange, isAdmin, name}) => {

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isAdmin}
            onChange={handleChange}
            name={name}
            color="primary"
          />
        }
        label="Admin"
        labelPlacement="start"
      />
    </FormGroup>
  );
};

export default CustomSwitch;
