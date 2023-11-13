import React, { useState, useRef, useEffect } from 'react';
import {Typography, TextField, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {commentPost} from '../../actions/posts';
import useStyles from './styles';


const CommentSection = ({post}) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post.comments);
    const [comment, setComment] = useState('')
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const commentRef = useRef(null);

    const handleComment= async () => {
        const finalComment = `${user.result.name}: ${comment}`;
        const newComment = await dispatch(commentPost(finalComment, post._id));
        setComments(newComment);
        setComment('');
    };

    useEffect(()=> {
      commentRef.current.scrollIntoView();
    },[comments])

    return (
        <div>

          <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
              <Typography gutterBottom variant="h6">Comments</Typography>
              {comments.map((c, i) => (
                <Typography key={i} gutterBottom variant="subtitle1">
                  <strong>{c.split(': ')[0]}</strong>
                  {c.split(':')[1]}
                </Typography>
              ))}
              <div ref={commentRef} />
            </div>

            {user? (
            <div style={{ width: '70%' }}>
              <Typography gutterBottom variant="h6">Write a comment</Typography>
              <TextField fullWidth minRows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
              <br />
              <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
                Comment
              </Button>
            </div>
            ): null}
          </div>

        </div>
      );
}

export default CommentSection;





