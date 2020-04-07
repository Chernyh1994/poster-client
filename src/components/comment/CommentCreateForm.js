import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CustomBlock } from '../styledComponent/Templates';
import { createComment } from '../../store/actions/commentAction';

const validator = Yup.object({
    description: Yup.string()
        .min(1, 'description must be longer than 1 characters')
        .max(1000, 'description should be shorter than 1000 characters')
        .required('Required'),
});

const CommentCreateForm = () => {
    
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authReducer);

    const post = useFormik({
        initialValues: {
            description:'',
            author_id: user.id,
            post_id: ''
        },
        validationSchema: validator,
        onSubmit: ( description, author_id, post_id) => {
            dispatch(createComment( description, author_id, post_id));
        },
    });

    return (
        <form onSubmit={post.handleSubmit}>

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

export default CommentCreateForm;