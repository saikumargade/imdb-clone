import React from "react";
import shoes from "../../shoes.png";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  card: {
    display: "flex",
    width: "400px",
    height: "200px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  }
});

class Movies extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className="movies">
        <h2>List of movies</h2>

        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={shoes}
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

Movies.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Movies);
