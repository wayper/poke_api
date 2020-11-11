
import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import SearchPanel from '../SearchPanel/VSearchPanel';
import Filters from '../Filters/VFilters';
import Chip from '@material-ui/core/Chip';

import { useStores } from '../../store';

function VHeader() {
  const { types } = useStores();

  useEffect(() => {
    types.fetchData();
  }, [])

  return (
    <>
      <CssBaseline />
      <SearchPanel />
      <Toolbar />
      <Filters />
    <div>
      {types.results.map(({ name, url }) => <Chip key={url} label={name} onDelete={() => {}} />)}
    </div>
    </>
  );
}

export default observer(VHeader);
