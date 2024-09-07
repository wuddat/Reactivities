import { Button, Grid, ImageList, ImageListItem, Box,  ImageListItemBar, Stack,  } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Photo, Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent, useState } from "react";
import PhotoUpload from "../../app/common/photoUpload/PhotoUpload";
import { LoadingButton } from "@mui/lab";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarIcon from '@mui/icons-material/Star';

interface Props {
    profile: Profile;
}

export default observer(function ProfilePhotos({ profile }: Props) {
    const { profileStore: { isCurrentUser, uploadPhoto, uploading, loading, setMainPhoto, deletePhoto } } = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target, setTarget] = useState('');

    function handlePhotoUpload(file: Blob) {
        uploadPhoto(file).then(() => setAddPhotoMode(false));
    }

    function handleSetMainPhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);
    }

    function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }

    return (
        <Box position="relative" width="100%">
            {/* Button fixed to the right top corner */}
            {isCurrentUser &&
                (<Button
                    variant="contained"
                    color={addPhotoMode ? "error" : "success"}
                    sx={{ position: "absolute", top: 0, right: 16, zIndex: 1 }}
                    onClick={() => setAddPhotoMode(!addPhotoMode)}
                >
                    {addPhotoMode ? "Cancel" : "Upload Photo"}
                </Button>)}
            {/* Image list displays normally */}

            {addPhotoMode ? (
                <Grid container minHeight={'100%'}>
                    <PhotoUpload uploadPhoto={handlePhotoUpload} loading={uploading} />
                </Grid>
            ) : (<Grid container>
                <ImageList cols={5}>
                    {(profile.photos ?? []).map((photo) => (
                        <ImageListItem key={photo.id}>
                            <img src={photo.url} alt="no-photo-available" />
                            <ImageListItemBar
                                title={isCurrentUser && (<Stack direction='row' sx={{
                                    justifyContent: "space-between"
                                }}>
                                    <LoadingButton color="warning" variant="outlined" size="small" name={'main' + photo.id} disabled={photo.isMain}
                                        loading={target === 'main' + photo.id && loading}
                                        onClick={e => handleSetMainPhoto(photo, e)}><StarIcon /></LoadingButton>
                                    <LoadingButton color="error" variant="outlined" size="small" name={photo.id} disabled={photo.isMain}
                                        loading={target === photo.id && loading}
                                        onClick={e => handleDeletePhoto(photo, e)}><DeleteForeverIcon /></LoadingButton>
                                </Stack>)}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>)}

        </Box>
    );
});
