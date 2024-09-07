import LoadingButton from '@mui/lab/LoadingButton'
import { Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"

interface Props {
    loading?: boolean;
    content?: string;
}

export default function LoadingComponentMini({ loading = true, content = 'Loading...' }: Props) {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',  // Horizontally center
            alignItems: 'center',      // Vertically center
        }}>
            <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
            ><span>{content}</span></LoadingButton>
        </Box>

    )
}