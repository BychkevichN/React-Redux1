import { DataGrid, GridColDef } from '@mui/x-data-grid';
import pluralize from 'pluralize';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlaceType } from '../../api/Places';
import DateFormat from '../../constens/DateFormat';
import { RootState } from '../../store';
import { getPlaces } from '../../store/Places/ActionCreators';
import formatDate from '../../utils/formatDate';
import {Cabin, DirectionsTransit, Security,  } from '@mui/icons-material';

const mapType = (type: PlaceType) => {
  if (type === PlaceType.Basement) {
    return (<Cabin/>)
  }

  if (type === PlaceType.Bunker){
    return (<Security/>)
  }

  return (<DirectionsTransit/>)
}


const COLUMNS: GridColDef[] = [
  {field: 'type', headerName: 'Type', flex: 0.25, renderCell: (params) => mapType(params.value)},
  {field: 'address', headerName: 'Address', flex: 0.25},
  {field: 'capacity', headerName: 'Capacity', flex: 0.25},
  {field: 'createAt', headerName: 'Create At', flex: 0.25},
];

const Home: FC = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.places)

  useEffect(() => {
    dispatch(getPlaces());
  }, []);



  const rows = items?.map((place) => {
    return {
      id: place.id,
      address: place.address,
      type: place.type,
      capacity: `${place.capacity} ${pluralize('person', place.capacity)}`,
      createAt: formatDate(place.createAt, DateFormat.ShortDate),
    }
  })

  return (
    <div style={{height: 500}}>
     <DataGrid
      loading={!rows}
      rows={rows || []}
      columns={ COLUMNS }
      pageSize={7}
     />
 </div>
  );
};

export default Home;