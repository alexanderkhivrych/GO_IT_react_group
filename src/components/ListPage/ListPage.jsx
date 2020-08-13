import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, CircularProgress, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Route, Switch, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { parse } from 'qs';
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
    if (this.props.location.search) {
      const search = parse(this.props.location.search, { ignoreQueryPrefix: true });
      console.log(search);
    }
    giphy.fetchTrendingGifs({ limit: 12 }).then(({ data, error }) => {
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

    giphy.searchGifs({ limit: 12, q: 'Footbal', offset: newOffset }).then(({ data, error }) => {
      this.setState({ gifs: { data: [...currentData, ...(data?.data || [])], error, pagination: data?.pagination } });
    });
  };
  handleSearch = (e) => {
    e.preventDefault();

    this.props.history.replace({ query: { search: 'Test' }, search: 'search=test' });
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

    const {
      match: { path, url },
    } = this.props;

    return (
      <div className={classes.root}>
        <form id="search-form" onSubmit={this.handleSearch}>
          <input type="text" placeholder="Search gifs" />
          <button type="submit">search</button>
        </form>
        <Switch>
          <Route path={`${path}/fun`} exact render={() => <div>Fun gifs</div>} />
          <Route path={`${path}/love`} render={() => <div>Love gifs</div>} />
        </Switch>
        <Link to={`${url}/fun`}> go to Fun </Link>
        {this.props.location.state?.showInfoMessage && <div>Hello my friend</div>}
        Current category {this.props.match.params.category}
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            {/* <ListSubheader component="div"></ListSubheader> */}
          </GridListTile>
          {data.map(({ id, slug, title, images: { original, preview_gif } }) => (
            <GridListTile key={id}>
              <img src={preview_gif?.url || original?.url} alt={slug} />
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
