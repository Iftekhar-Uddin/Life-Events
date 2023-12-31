import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { deletePost, likePost } from '../../../actions/posts';


const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] =useState(post.likes);

    
    const userId = (user? (user.result.sub || user.result._id) : null);
    const haslikedpost = post.likes.find((like) => like === userId);

    const handleLike = async () => {
      dispatch(likePost(post._id))

      if(haslikedpost){
        setLikes(post.likes.filter((like) => like !== userId))
      }else{
        setLikes([...post.likes, userId]);
      }
    };

    const Likes = () => {
      if(user === null){
        return <><ThumbUpAltIcon fontSize="small" />&nbsp;Like</>;
      }else{

        if (likes.length > 0) { 
          return likes.find((like) => like === userId)
            ? (
            <><ThumbUpAltIcon fontSize="small"/>&nbsp;{likes.length > 2 ? `You and ${likes.length -1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
            <><ThumbUpAltOutlined fontSize="small"/>&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'} </>
            );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      }
    };

    const openPost = () => {
      navigate(`/posts/${post._id}`);
    };

    return (
      <Card className={classes.card} raised elevation={4}>
          <ButtonBase component="span" name="test" className={classes.cardAction} onClick={openPost}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          </ButtonBase>
          <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography> 
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
          <CardContent>
            <Typography variant="body2" color= "textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
          </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" disabled={!user} onClick={handleLike}> <Likes/> </Button>
            {user? ((user.result.sub === post.creator || user.result._id === post.creator) ? (
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize="small" />
                Delete
            </Button>
            ): null) : null}
            { user? ((user.result._id === post.creator || user.result.sub === post.creator)? (
          <div className={classes.overlay2} name="edit">
            <Button style={{color:'white'}} size="small" onClick={(e) => {e.stopPropagation(); setCurrentId(post._id)}}>
                <MoreHorizIcon fontSize="medium"/>
            </Button>
          </div>) : null): null}
        </CardActions>
      </Card>
    );
}

export default Post;
