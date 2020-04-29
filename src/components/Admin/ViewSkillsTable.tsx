import React, { FunctionComponent, useState, SyntheticEvent } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import { TUserSkills } from 'src/apolloTypes';
import { useStore } from 'src/store';

type Props = {
  userSkills: TUserSkills[];
};

type Column = {
  id: 'name' | 'status' | 'action';
  label: string;
};

const columns: Column[] = [
  { id: 'name', label: 'SKILL NAME' },
  { id: 'status', label: 'STATUS' },
  { id: 'action', label: 'ACTION' },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  tableRow: {
    cursor: 'pointer',
  },
});

const ViewSkillsTable: FunctionComponent<Props> = ({ userSkills }) => {
  const classes = useStyles();

  const { uiStore } = useStore();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const _handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const _handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const _openDialog = (e: SyntheticEvent<HTMLSpanElement> | SyntheticEvent<HTMLButtonElement>) => {
    uiStore.openDialog(e.currentTarget.id);
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
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
          </TableHead>
          <TableBody>
            {userSkills.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((userSkill) => {
              return (
                <TableRow hover={true} role="checkbox" tabIndex={-1} key={userSkill.name} className={classes.tableRow}>
                  <TableCell key={userSkill.id}>
                    {userSkill.name}
                  </TableCell>
                  <TableCell key={userSkill.status}>
                    {userSkill.status}
                  </TableCell>
                  <TableCell
                    key={userSkill.evidence}
                    id={`user-skill-${userSkill.id}`}
                    onClick={_openDialog}
                  >
                    View
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
        count={userSkills.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={_handleChangePage}
        onChangeRowsPerPage={_handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ViewSkillsTable;
