import React from 'react';
import CreatePostForm from '../../components/post/CreatePostForm';
import {
    PostCard, 
    FormTitle, 
} from '../../components/styledComponent/Templates';

const CreatePost = () => {

    return (
        <PostCard>
            <FormTitle> 
                New Post
            </FormTitle> 
            <CreatePostForm/>
        </PostCard>
    )
};

export default CreatePost;