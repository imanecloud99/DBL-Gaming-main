import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import fetchInject from 'fetch-inject';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  
      fetchInject([
        'http://amp.azure.net/libs/amp/2.3.6/azuremediaplayer.min.js'
      ]);
      fetchInject([
        'http://amp.azure.net/libs/amp/2.3.6/skins/amp-default/azuremediaplayer.min.css'
      ]);
     
      
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (<div>
   
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
    
    
      <video id="video"

       class="azuremediaplayer amp-default-skin" 
        width="500" 
       height="400" 
       data-setup='{"nativeControlsForTouch":false,"controls": true, "autoplay": false }'>
            <source src="https://streamin-usea.streaming.media.azure.net/cc29be37-df56-4909-8379-53b0f945dc3d/e8dc7e22-1f39-4ce7-98a3-15490fdaee54.ism/manifest"
                    type="application/vnd.ms-sstr+xml" />
                  
      </video>
      <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
</div>
        
    
  );
  
};

export default Post;
