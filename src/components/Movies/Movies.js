import React from "react";
import faker from "faker";
import "./Movies.css";
import StarRatingComponent from "react-star-rating-component";

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
    flexDirection: "column",
    alignContent: "flex-end"
  },
  content: {
    flex: "1 0"
  },
  cover: {
    width: "151px"
  }
});

const movies = [];
for (let i = 0; i < 100; i++) {
  movies.push({
    id: i,
    image: faker.image.fashion(),
    movie: faker.lorem.word(),
    year: faker.random.number({ min: 1990, max: 2020 }),
    price: faker.random.number({ min: 150, max: 300 }),
    description: faker.lorem.sentence()
  });
}

// console.log(movies);

class Movies extends React.Component {
  state = {
    rating: 0
  };
  onStarClick = (next) => {
    this.setState({ rating: next });
  };
  //   handleClear = () => {
  //     this.setState({ rating: 0 });
  //   };
  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <h2>List of movies</h2>
        <div className="movies">
          {movies.map((c) => {
            return (
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image={c.image}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent>
                    <Typography component="h6" variant="h6">
                      {c.movie}({c.year})
                    </Typography>
                    <Typography>Price:Rs.{c.price}/-</Typography>
                    {/* <Typography>Rating:</Typography> */}
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={this.state.rating}
                      onStarClick={this.onStarClick}
                    />
                    {this.state.rating ? <sup> {this.state.rating}/5</sup> : ""}
                    {/* {this.state.rating ? (
                      <sup>
                        <button onClick={this.handleClear}>clear</button>
                      </sup>
                    ) : (
                      ""
                    )} */}
                    <Typography variant="subtitle1" color="textSecondary">
                      {c.description}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

Movies.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Movies);
