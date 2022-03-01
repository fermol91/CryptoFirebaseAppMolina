import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardComponent = ({coinsData}) => {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={coinsData.icon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {coinsData.Coin}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Symbol: {coinsData.Acronimo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {coinsData.Price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Var: {coinsData.variacion} %
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Available: {coinsData.cantidad}
        </Typography> 

      </CardContent>
    </Card>
  );
}

export default CardComponent;