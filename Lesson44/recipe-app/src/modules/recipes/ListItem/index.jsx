import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

export const ListItem = ({ strMealThumb, strMeal }) => {
  // Added height: '100%' to the Card and CardActionArea to make sure that each card has the same height.
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component='img'
          height='150'
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h3'>
            {strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
