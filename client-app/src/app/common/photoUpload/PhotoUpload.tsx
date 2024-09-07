import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';
import PhotoCropper from './PhotoCropper';
import { LoadingButton } from '@mui/lab';
import LoadingComponentMini from '../../layout/LoadingComponentMini';



interface Steps {
    menuItem: string;
    render: React.ReactNode;
}

interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}



export default function PhotoUpload({ loading, uploadPhoto }: Props) {
    const [activeStep, setActiveStep] = useState(0);
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if (cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    }, [files])

    const steps: Steps[] = [
        { menuItem: 'Upload', render: <PhotoWidgetDropzone setFiles={setFiles} files={files} /> },
        { menuItem: 'Resize', render: <PhotoCropper files={files} setCropper={setCropper} /> },
        { menuItem: 'Finalize', render: <LoadingComponentMini content='Uploading...' /> },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step) => (
                    <Step key={step.menuItem}>
                        <StepLabel>{step.menuItem}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ p: 3 }}>
                {activeStep === steps.length ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">All steps completed</Typography>
                        <Button onClick={handleReset} variant="contained" sx={{ mt: 2 }}>
                            Reset
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            {steps[activeStep].menuItem}
                        </Typography>
                        {steps[activeStep].render}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="outlined"
                            >
                                Back
                            </Button>
                            <LoadingButton
                                loading={loading}
                                variant="contained"
                                onClick={
                                    activeStep === 0 ? handleNext : onCrop
                                }
                            >
                                {activeStep === steps.length - 1 ? <span>Finalize Upload</span> : <span>Next</span>}
                            </LoadingButton>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
