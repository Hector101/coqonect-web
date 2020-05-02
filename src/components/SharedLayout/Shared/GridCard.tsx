import React, { FunctionComponent, ReactNode } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

type Props = {
  headerTitle?: string;
  subHeaderTitle?: string;
  children: ReactNode;
  xs?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const GridCard: FunctionComponent<Props> = ({ children, headerTitle, subHeaderTitle, ...rest }) => {
  return (
    <Grid item {...rest} style={{ height: '100%' }}>
      <Card variant="outlined">
        {
          headerTitle || subHeaderTitle
            ? (
              <CardHeader
                title={headerTitle}
                subheader={subHeaderTitle}
              />
            )
            : null
        }
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GridCard;
