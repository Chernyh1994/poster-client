import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPost } from '../../store/actions/postAction';
import { getComments } from '../../store/actions/commentActions';
import AboutCardPost from '../../components/post/AboutCardPost';
import EmptyCard from '../../components/post/EmptyCard';
import LoadingCard from '../../components/LoadingCard';
import CommentList from '../../components/comment/CommentList';

const AboutPost = (props) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getComments(id));
  }, [dispatch, id]);

  const { post, isLoading } = useSelector((state) => state.postReducer);

  if (isLoading) {
    return <LoadingCard/>;
  }

  return (
    post && post.length ?
      <div>
        <AboutCardPost/>
        <CommentList/>
      </div> :
      <EmptyCard/>
  );
};

export default AboutPost;