import React, { FunctionComponent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  extraLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

type Props = {
  src: string | null;
  fallbackIconName?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
};

const ImageAvatar: FunctionComponent<Props> = ({
    src,
    fallbackIconName = 'ProfilePic',
    size = 'small',
    ...restProps
  }) => {
    const classes = useStyles();
    const srcName = src ?? `/svgs/${fallbackIconName}.svg`;
    return (
      <Avatar src={srcName} {...restProps} className={classes[size]} />
    );
};

export default ImageAvatar;
