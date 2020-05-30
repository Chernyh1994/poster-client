import React from 'react';
import { useSelector } from 'react-redux';

import LoadingCard from '../../UI/LoadingCard';
import EmptyContentCard from '../../UI/EmptyContentCard';
import PostCard from '../PostCard';
import Comments from '../../Comment/CommentList/Comments';

const Post = ({props}) => {
  const postId = props.match.params.id;
  const { byId, isLoading } = useSelector((state) => state.posts);
  const emptyPost = Object.keys(byId).length;

  if (isLoading) {
    return <LoadingCard/>;
  }

  return (
    emptyPost ?
      <div>
        <PostCard post={byId[postId]}/>
        <Comments postId={postId}/>
      </div> 
      :
      <EmptyContentCard/>
  );
};

export default Post;
