// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// // import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    color:  '#00909E',
  },
  table: {
    minWidth: 400,
    color:  '#00909E',
  },
});

let id = 0;
function createData(property, data) {
  id += 1;
  return { id, property, data };
}

const rows = [
  createData('Publisher', "Pesuru"),
  createData('Publish Date', "2021-05-23"),
  createData('Category', "Adventures"),
  createData('Author', "S.K. Samarapala"),
  createData('Number Of Pages', "356"),
  createData('Number Of Copies', "10"),
  createData('ISBN Number', "356.16.049.3.9"),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.property}
              </TableCell>
              <TableCell align="right">{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);