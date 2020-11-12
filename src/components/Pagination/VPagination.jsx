import React from 'react';
import { observer } from "mobx-react-lite"
import Container from '@material-ui/core/Container';
import TablePagination from '@material-ui/core/TablePagination';

import { useStores } from '../../store';

function VPagination() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { pokemons: { count, fetchData } } = useStores();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({ target }) => {
    setRowsPerPage(parseInt(target.value, 10));
    fetchData({ limit: target.value });
    setPage(0);
  };

  return (
    <Container maxWidth="sm">
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={count}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  );
}

export default observer(VPagination);

