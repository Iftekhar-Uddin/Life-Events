import React from 'react';
import { useSelector } from 'react-redux';
import {CircularProgress, Grid, Paper, Typography} from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.length && !isLoading) {
    return (
    <Paper elavation={6} className={classes.loadingPaper}>
    <Typography  variant="h4" >No Result Found. Please Try Again!</Typography>
    </Paper>
  )
  }else{
    return(
      (
        isLoading ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
      )
    )
  }

};

export default Posts;
