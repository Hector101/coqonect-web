import React, { FunctionComponent } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  toggleSwitch: () => void;
  isAdminLogin: boolean;
  name?: string;
  size?: 'small' | 'medium';
  label?: string;
  labelPlacement?: 'start' | 'top' | 'bottom' | 'end';
};

const useStyles = makeStyles(() => ({
  switchBase: {
    '&$checked': {
      'color': '#13b8c2',
      '& + $track': {
        backgroundColor: '#1677D6',
      },
    },
  },
  track: {
    backgroundColor: '#13b8c2',
  },
  checked: {
    color: '#13b8c2',
  },
  formLabel: {
    margin: 0,
  },
}));

const CustomSwitch: FunctionComponent<Props> = ({
  toggleSwitch,
  isAdminLogin,
  name,
  size,
  label,
  labelPlacement,
}) => {
  const classes = useStyles();

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isAdminLogin}
            onChange={toggleSwitch}
            name={name || 'switch'}
            classes={{
              switchBase: classes.switchBase,
              track: classes.track,
              checked: classes.checked,
            }}
            size={size || 'small'}
          />
        }
        label={label}
        labelPlacement={labelPlacement || 'start'}
        className={classes.formLabel}
      />
    </FormGroup>
  );
};

export default CustomSwitch;
