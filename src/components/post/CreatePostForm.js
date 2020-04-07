import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CustomBlock } from '../styledComponent/Templates';
import { createPost } from '../../store/actions/postAction';

const validator = Yup.object({
    title: Yup.string()
        .min(5, 'title must be longer than 5 characters')
        .max(100, 'title should be shorter than 100 characters')
        .required('Required'),
    description: Yup.string()
        .min(5, 'description must be longer than 5 characters')
        .max(2000, 'description should be shorter than 2000 characters')
        .required('Required'),
});

const CreatePostForm = () => {
    
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authReducer);

    const post = useFormik({
        initialValues: {
            title: '',
            description:'',
            author_id: user.id
        },
        validationSchema: validator,
        onSubmit: (title, description, author_id) => {
            dispatch(createPost(title, description, author_id));
        },
    });

    return (
        <form onSubmit={post.handleSubmit}>
            <CustomBlock>
                <TextField
                    fullWidth
                    label="Title*"
                    name="title"
                    {...post.getFieldProps('title')}
                    error={!!post.touched.title && !!post.errors.title }
                    helperText={post.touched.title && post.errors.title ? post.errors.title: null}
                />
            </CustomBlock>

            <CustomBlock>
                <TextField
                    fullWidth
                    label="Description*"
                    name="description"
                    placeholder="Placeholder"
                    multiline
                    {...post.getFieldProps('description')}
                    error={!!post.touched.description && !!post.errors.description }
                    helperText={post.touched.description && post.errors.description ? post.errors.description: null}
                />
            </CustomBlock>

            <CustomBlock>
                <Button color="primary" fullWidth type="submit" startIcon={<PostAddIcon fontSize="small" />} >
                    Send
                </Button>
            </CustomBlock>

        </form>
    );
}

export default CreatePostForm;