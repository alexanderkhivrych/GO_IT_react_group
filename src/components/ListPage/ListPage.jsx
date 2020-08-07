import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, CircularProgress, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import { giphy } from '../../api';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
  },
  gridlist: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class ListPage extends Component {
  state = {
    gifs: { data: [], error: null, pagination: null, loading: true },
  };
  componentDidMount() {
    this.setState({ gifs: { ...this.state.gifs, loading: true } });
    giphy.fetchTrendingGifs({ limit: 10 }).then(({ data, error }) => {
      this.setState({
        gifs: { ...this.state.gifs, pagination: data?.pagination, data: data?.data || [], error, loading: false },
      });
    });
  }

  handleLoadMore = () => {
    const {
      gifs: { data: currentData, pagination },
    } = this.state;

    const newOffset = pagination.offset + pagination.count;

    giphy.searchGifs({ limit: 10, q: 'dsadsadas', offset: newOffset }).then(({ data, error }) => {
      this.setState({ gifs: { data: [...currentData, ...(data?.data || [])], error, pagination: data?.pagination } });
    });
  };

  render() {
    const { classes } = this.props;
    const {
      gifs: { data, error, loading, pagination },
    } = this.state;

    if (error) {
      return <Alert severity="error">{error}</Alert>;
    }

    if (loading) {
      return <CircularProgress />;
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            {/* <ListSubheader component="div"></ListSubheader> */}
          </GridListTile>
          {data.map(({ id, slug, title, images: { original: { url } } }) => (
            <GridListTile key={id}>
              <img src={url} alt={slug} />
              <GridListTileBar
                title={title}
                actionIcon={
                  <IconButton aria-label={`info about ${title}`} className={classes.icon}>
                    {/* <InfoIcon /> */}
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>

        {pagination.offset + pagination.count <= pagination.total_count && (
          <Button onClick={this.handleLoadMore} variant="contained" color="secondary">
            Load More
          </Button>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ListPage);
