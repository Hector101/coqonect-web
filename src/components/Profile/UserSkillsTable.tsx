import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PanToolIcon from '@material-ui/icons/PanTool';

import { TSkills } from 'src/apolloTypes';

type Props = {
  skills: TSkills[];
};

type Column = {
  id: 'name' | 'verified';
  label: string;
  minWidth?: number;
  align?: 'right';
};

const columns: Column[] = [
  { id: 'name', label: 'SKILL NAME', minWidth: 170 },
  { id: 'verified', label: 'STATUS', minWidth: 100, align: 'right' },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  verifiedIconColor: {
    color: '#16B8C2',
  },
  pendingReviewIcon: {
    color: '#ec1111',
  },
  tableRow: {
    cursor: 'pointer',
  },
});

const UserSkillsTable: FunctionComponent<Props> = ({ skills }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((skill) => {
              return (
                <TableRow hover={true} role="checkbox" tabIndex={-1} key={skill.name} className={classes.tableRow}>
                  <TableCell key={skill.id} align="left">
                    {skill.name}
                  </TableCell>
                  <TableCell key={skill.id} align="right">
                    {skill.verified
                      ? (
                        <div className="inline-flex items-center">
                          <span className="f7 mr1">Verified</span>
                          <CheckCircleOutlineIcon className={classes.verifiedIconColor} fontSize="small" />
                        </div>
                      )
                      : (
                        <div className="inline-flex items-center">
                          <span className="f7 mr1">Pending Review</span>
                          <PanToolIcon className={classes.pendingReviewIcon} fontSize="small" />
                        </div>
                      )
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={skills.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UserSkillsTable;
