import React from 'react';
import '../css/CryptoPriceTracker.css';
import Button from 'react-bootstrap/esm/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CryptoPriceTracker = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="crypto-container">
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardHeader title="Crypto Price Tracker " />
        <CardMedia component="img" height="194" image="btc" alt="Crypto Coin" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h5>Project Details</h5>
            The app allows for users to search for the crypto/token of their
            choice and observe it's financial data (price, volume, price
            change). I was curious in trying new project ideas and the crypto
            price tracker was something I wanted to learn more about.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="success">
            <a
              href="https://my-crypto-price-tracker.herokuapp.com/"
              id="project-link"
              target="_blank"
            >
              Crypto Price Tracker
            </a>
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <h5>Tech/Libraries Used:</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              React JS, Axios, Material UI, CSS
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              <h5>What I learned:</h5>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I learned how to use an external API with the axios library to
              fetch data
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default CryptoPriceTracker;
