import { observer } from 'mobx-react-lite';
import { useEffect } from 'react'
import { Card, CardContent, Typography, Grid, Avatar, Box } from '@mui/material/';
import { useStore } from '../../../app/stores/store';
import { Formik } from 'formik';
import FormikTextArea from '../../../app/common/form/FormikTextArea';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns/esm';

interface Props {
    activityId: string;


}



export default observer(function ActivityDetailedChat({ activityId }: Props) {
    const { commentStore } = useStore();

    useEffect(() => {
        if (activityId) {
            commentStore.createHubConnection(activityId);
        }
        return () => {
            commentStore.clearComments();
        }
    }, [commentStore, activityId])

    return (
        <Card sx={{
            width: '100%',
            mt: 2,
        }}>
            <CardContent sx={{
                backgroundColor: "teal",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2
            }}>
                <Typography variant="h5" color="white">Join the Conversation!</Typography>
            </CardContent>

            <Grid container direction="column" spacing={2}>
                {commentStore.comments.map((comment, idx) => {
                    const createdAtDate =
                        typeof comment.createdAt === 'string'
                            ? new Date(comment.createdAt)
                            : comment.createdAt;
                    const isValidDate = createdAtDate instanceof Date && !isNaN(createdAtDate.getTime());

                    return (
                        <CardContent key={comment.id + idx}>
                            <Grid container alignItems="center">
                                {/* Avatar on the left side */}
                                <Grid item>
                                    <Avatar
                                        sx={{
                                            width: 100,
                                            height: '100%', // Avatar full height
                                            marginRight: 2, // Add space between avatar and text
                                            marginLeft: 2,
                                        }}
                                        aria-label="avatar"
                                        src={comment.image || "/assets/user.png"}
                                    />
                                </Grid>
                                {/* Comment details on the right side */}
                                <Grid item xs>
                                    <Typography
                                        component="a"
                                        href={`/profiles/${comment.username}`}
                                        sx={{ fontWeight: 'bold', display: 'block' }} // Display as block for stacking
                                    >
                                        {comment.displayName}
                                    </Typography>
                                    <Typography variant="body2" color="grey">
                                        {isValidDate ? `${formatDistanceToNow(createdAtDate)} ago..` : 'some time ago..'}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: 1 }}>
                                        {comment.body}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    );
                })}
            </Grid>

            <CardContent>
                <Formik
                    onSubmit={(values, { resetForm }) => commentStore.addComment(values).then(() => resetForm())}
                    initialValues={{ body: '' }}
                    validationSchema={Yup.object({
                        body: Yup.string().required("You can't post an empty comment!")
                    })}
                >
                    {({ handleSubmit, isSubmitting, }) => (
                        <Box component="form" sx={{ m: 0, p: 0 }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}>
                            <Grid container>
                                <Grid item xs={12} sx={{ mt: 2 }}>
                                    <FormikTextArea
                                        name="body"
                                        label="Add Comment"
                                        rows='2'
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                    <LoadingButton
                                        loading={isSubmitting}
                                        variant="contained"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        <span>Add Reply</span>
                                    </LoadingButton>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Formik>
            </CardContent>
        </Card >

    )
})