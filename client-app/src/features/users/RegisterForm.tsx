import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import FormikInputField from "../../app/common/form/FormikInputField";
import { LoadingButton } from "@mui/lab";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';


export default observer(function RegisterForm() {
    const { activityStore, userStore } = useStore();
    const { loadingInitial } = activityStore;


    if (loadingInitial) return <LoadingComponent />;

    return (

        <>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',  // Horizontally center
                alignItems: 'center',      // Vertically center
            }}>
                <Formik
                    initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
                    onSubmit={(values, { setStatus, setSubmitting }) => {
                        userStore.register(values)
                            .then(() => {
                                setStatus({ error: null });
                                setSubmitting(false);
                            })
                            .catch(error => {
                                setStatus({ error: error });
                                setSubmitting(false);
                            })
                    }}
                    validationSchema={Yup.object({
                        displayName: Yup.string().required(),
                        username: Yup.string().required(),
                        email: Yup.string().required(),
                        password: Yup.string().required(),
                    })}
                >
                    {({ handleSubmit, isValid, isSubmitting, dirty, status }) => (
                        <Box
                            component="form"
                            sx={{
                                display: "flex",
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                flex: '1',
                                padding: 3

                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Typography variant="h4" color='teal' sx={{ mb: 1, textAlign: 'center' }}>Sign Up to Reactivities!</Typography>

                            {status?.error && !isSubmitting && (
                                <Grid component="div" sx={{ m: 1 }} >
                                    <Alert variant="filled" severity="error">
                                        {status.error}
                                    </Alert>
                                </Grid>)}

                            <FormikInputField
                                name="username"
                                label="Username" />

                            <FormikInputField
                                name="displayName"
                                label="Display Name" />

                            <FormikInputField
                                name="email"
                                label="Email" />

                            <FormikInputField
                                name="password"
                                label="Password"
                                type="password" />

                            <LoadingButton
                                loading={isSubmitting}
                                sx={{ flex: 1 }}
                                variant="contained"
                                color="success"
                                type="submit"
                                disabled={!dirty || !isValid || isSubmitting}
                            >
                                <span>Register</span>
                            </LoadingButton>
                        </Box>)}
                </Formik >
            </Container >
        </>
    );

})