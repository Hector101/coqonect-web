import React, { FunctionComponent } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

type Props = {
  toggleSwitch: () => void ;
  isAdminLogin: boolean;
  name?: string;
  label?: string;
  labelPlacement?: 'start' | 'top' | 'bottom' | 'end';
};

const CustomSwitch: FunctionComponent<Props> = ({
  toggleSwitch,
  isAdminLogin,
  name,
  label,
  labelPlacement,
}) => {

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isAdminLogin}
            onChange={toggleSwitch}
            name={name || 'switch'}
            color="primary"
          />
        }
        label={label}
        labelPlacement={labelPlacement || 'start'}
      />
    </FormGroup>
  );
};

export default CustomSwitch;
