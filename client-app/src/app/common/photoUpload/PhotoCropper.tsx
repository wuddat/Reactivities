import { Box, Typography } from "@mui/material";
import { Cropper } from "react-cropper";
import 'cropperjs/dist/cropper.css'
interface Props {
    files: any;
    setCropper: (cropper: Cropper) => void;
}

export default function PhotoCropper({ files, setCropper }: Props) {
    return (<>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <Box sx={{ width: "50%", float: "left", border: '0px solid black' }}>
                <Cropper
                    src={files[0].preview}
                    style={{ height: 300, width: '' }}
                    initialAspectRatio={1}
                    aspectRatio={1}
                    preview='.img-preview'
                    guides={false}
                    viewMode={1}
                    autoCropArea={1}
                    background={false}
                    onInitialized={cropper => setCropper(cropper)}


                />
            </Box>
            <Box className="box" style={{ display: 'flex', width: "50%", justifyContent: "center", border: '0px solid black' }}>
                <Typography variant="h6" sx={{ position: "absolute", top: '17%', right: '11%', zIndex: 1 }}>Preview</Typography >
                <div
                    className="img-preview"
                    style={{ width: "100%", float: "left", height: "300px", overflow: 'hidden', border: '1px solid black' }}
                />
            </Box>
        </Box>

    </>
    )
}