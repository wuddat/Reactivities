import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


interface Props {
    setFiles: (files: any) => void;
    files: any;
}


export default function PhotoWidgetDropzone({ setFiles, files }: Props) {
    const dzStyles = {
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px',
        textAlign: 'center' as 'center',
        height: 200
    }

    const dzActive = {
        borderColor: 'green'
    }

    const onDrop = useCallback((acceptedFiles: any[]) => {
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
        console.log(acceptedFiles);
    }, [setFiles])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}>
            <input {...getInputProps()} />
            {files && files.length == 0 && (
                <CloudUploadIcon sx={{ fontSize: '4em' }} />
            )}
            {files && files.length > 0 && (
                <div>
                    {files.map((file: any, index: number) => (
                        <img
                            key={index}
                            src={file.preview}
                            alt="Preview"
                            style={{ width: '100px', margin: '10px' }} // Adjust size and spacing as needed
                        />
                    ))}
                </div>
            )
            }
        </div >
    )
}