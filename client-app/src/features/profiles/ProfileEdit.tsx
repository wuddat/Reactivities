import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Box, Grid, Typography } from "@mui/material";
import FormikInputField from "../../app/common/form/FormikInputField";
import FormikTextArea from "../../app/common/form/FormikTextArea";
import { LoadingButton } from "@mui/lab";


interface Props {
    setEditMode: (editMode: boolean) => void;
}


export default observer(function ProfileEdit({ setEditMode }: Props) {
    const { profileStore: { profile, updateProfile } } = useStore();


    return (
        <>
            <Formik
                initialValues={{ displayName: profile?.displayName, bio: profile?.bio }}
                onSubmit={values => {
                    updateProfile(values).then(() => {
                        setEditMode(false);
                    })
                }}
                validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                })}
            >
                {({ handleSubmit, isSubmitting, isValid, dirty }) => (
                    <Box
                        component="form"
                        sx={{
                            backgroundColor: 'white',
                            width: '100%'
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Grid container>
                            <Grid item xs={10}>
                                <FormikInputField
                                    name="displayName"
                                    label="Display Name"
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <FormikTextArea
                                    name="bio"
                                    label="Bio"
                                    rows='5'
                                />
                            </Grid>
                            {/* Button Grid */}
                            <Grid
                                item
                                xs={10}
                                sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}
                            >
                                <LoadingButton
                                    color="success"
                                    loading={isSubmitting}
                                    variant="contained"
                                    type="submit"
                                    disabled={!dirty || !isValid}
                                >
                                    Update
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </Box>)}
            </Formik>
        </>)
})