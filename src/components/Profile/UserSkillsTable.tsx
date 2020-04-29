import React, { FunctionComponent } from 'react';
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
import BlockIcon from '@material-ui/icons/Block';
import Chip from '@material-ui/core/Chip';

import { TSkills } from 'src/apolloTypes';

import { useTableStyles } from 'src/styles/materiaStyles';

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

const UserSkillsTable: FunctionComponent<Props> = ({ skills }) => {
  const classes = useTableStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const _handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const _handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const _renderVerificationStatus = (skill: TSkills) => {
    switch (skill.status) {
      case 'pending':
        return (
          <div className="inline-flex items-center">
            <PanToolIcon className={classes.pendingReviewIcon} fontSize="small" />
          </div>
        );
      case 'verified':
        return (
          <div className="inline-flex items-center">
            <CheckCircleOutlineIcon className={classes.verifiedIconColor} fontSize="small" />
          </div>
        );
      case 'unverified':
        return (
          <div className="inline-flex items-center">
            <BlockIcon className={classes.unverifiedIcon} fontSize="small" />
          </div>
        );
      default:
        return (
          <div className="inline-flex items-center">
            <span className="f7 mr1">unknown </span>
          </div>
        );
    }
  };

  return (
    <>
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
                      {_renderVerificationStatus(skill)}
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
          onChangePage={_handleChangePage}
          onChangeRowsPerPage={_handleChangeRowsPerPage}
        />
      </Paper>
      <div className="flex justify-end mt3">
        <Chip
          icon={<CheckCircleOutlineIcon className={classes.verifiedIconColor} fontSize="small" />}
          label="Verified"
          variant="outlined"
        />
        <Chip
          icon={<PanToolIcon className={classes.pendingReviewIcon} fontSize="small" />}
          label="Pending Review"
          variant="outlined"

        />
        <Chip
          icon={<BlockIcon className={classes.unverifiedIcon} fontSize="small" />}
          label="Unverified"
          variant="outlined"
        />
      </div>
    </>
  );
};

export default UserSkillsTable;
