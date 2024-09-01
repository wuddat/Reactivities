import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from "@mui/icons-material/Send";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Formik } from "formik";
import * as Yup from 'yup';
import FormikInputField from "../../../app/common/form/FormikInputField";
import FormikTextArea from "../../../app/common/form/FormikTextArea";
import FormikSelector from "../../../app/common/form/FormikSelector";
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    const handleFormSubmit = (activity: Activity) => {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        category: Yup.string().required('Category is required'),
        date: Yup.string().required('Date is required'),
        city: Yup.string().required('City is required'),
        venue: Yup.string().required('Venue is required')
    });

    // const handleSubmit = (values: Activity) => {
    //    if (!values.id) {
    //         values.id = uuid();
    //        createActivity(values).then(() => navigate(`/activities/${values.id}`));
    //    } else {
    //        updateActivity(values).then(() => navigate(`/activities/${values.id}`));
    //   }
    //   };

    if (loadingInitial) return <LoadingComponent />;

    return (
        <>
            <Box sx={{ backgroundColor: "white", borderTop: '1px solid lightgrey', padding: 1 }}>
                <Typography variant="h5" component="h1" color="teal">Activity Details</Typography>
            </Box>
            <Formik
                enableReinitialize
                initialValues={activity}
                validationSchema={validationSchema}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            backgroundColor: 'white'
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
                            <FormikInputField
                                name="title"
                                label="Title" />
                            <Button
                                sx={{ p: 0, m: 0 }}
                                variant="outlined"
                                color="error"
                                size="small"
                                component='a'
                                href='/activities'
                            >
                                X
                            </Button>
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <FormikTextArea
                                name="description"
                                label="Description"
                                rows='5'
                            />
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <FormikSelector
                                name="category"
                                label="Category"
                                options={[
                                    'drinks',
                                    'culture',
                                    'film',
                                    'food',
                                    'music',
                                    'travel',
                                ]} />
                        </Box>
                        <Box sx={{ backgroundColor: "white", padding: 1 }}>
                            <Typography variant="h5" component="h2" color="teal">Location Details</Typography>
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <FormikInputField
                                name="date"
                                label="Date"
                                type="date" />
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <FormikInputField
                                name="city"
                                label="City" />
                        </Box>
                        <Box sx={{ m: 1 }}>
                            <FormikInputField
                                name="venue"
                                label="Venue" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "row" }}>
                            <LoadingButton
                                endIcon={<SendIcon />}
                                loading={loading}
                                loadingPosition="end"
                                sx={{ flex: 1 }}
                                variant="contained"
                                type="submit"
                                disabled={isSubmitting || !dirty || !isValid}
                            >
                                <span>Submit</span>
                            </LoadingButton>
                        </Box>
                    </Box>
                )}
            </Formik>
        </>);
});