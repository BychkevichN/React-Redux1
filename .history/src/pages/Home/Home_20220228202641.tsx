import { DataGrid, GridColDef } from '@mui/x-data-grid';
import pluralize from 'pluralize';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlaceType } from '../../api/Places';
import DateFormat from '../../constens/DateFormat';
import { RootState } from '../../store';
import { getPlaces } from '../../store/Places/ActionCreators';
import formatDate from '../../utils/formatDate';
import CabinIcon from '@mui/icons-material/Cabin';



const COLUMNS: GridColDef[] = [
  {field: 'type', headerName: 'Type', flex: 0.25},
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

  const mapType = (type: PlaceType) => {
    if (type === PlaceType.Basement) {
      return (<CabinIcon/>)
    }

    if (type === PlaceType.Bunker){
      return (<CabinIcon/>)
    }

    return (<CabinIcon/>)
  }

  const rows = items?.map((place) => {
    return {
      id: place.id,
      address: place.address,
      type: mapType(place.type),
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