import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getPlaces } from '../../store/Places/ActionCreators';

const COLUMNS: GridColDef[] = [
  {field: 'address', headerName: 'Address'},
  {field: 'type', headerName: 'Type'},
  {field: 'capacity', headerName: 'Capacity'},
  {field: 'createAt', headerName: 'Create At'},
];

const Home: FC = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.places)

  useEffect(() => {
    dispatch(getPlaces());
  }, [])

  const rows = items?.map((place) => {
    return {
      id: place.id,
      address: 'ddd',
      type: 'ddd',
      capacity: 'fff',
      createAt: 'ggg',
    }
  })

  return (
    <div style={{height: 500}}>
     <DataGrid
      rows={rows || []}
      columns={ COLUMNS }
     />
 </div>
  );
};

export default Home;