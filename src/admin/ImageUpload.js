import React, { useRef, useState, useEffect } from 'react';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
import './ImageUpload.css';
function ImageUpload(props) {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();

    const filePickerRef = useRef();

    const pickedHandler = event => {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
        }
        props.onImageInput(pickedFile);
    }

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }, [file]);

    useEffect(() => {
        if (props.resetImages) {
            setPreviewUrl();
            setFile();
        }
    }, [props.resetImages])

    return (
        <div>
            <input
                type="file"
                ref={filePickerRef}
                style={{ display: 'none' }}
                accept=".jpg, .png, .jpeg"
                onChange={pickedHandler}
                disabled={props.isLoading}
            />
            <div className="imageUpload">
                {!previewUrl &&
                    <div className="imageUpload__select" onClick={pickImageHandler}>
                        <ImageSearchOutlinedIcon fontSize="large" />
                    </div>
                }
                {previewUrl &&
                    <>
                        <div className="imageUpload__preview">
                            <img src={previewUrl} alt="Preview" />
                        </div>
                        <div className="imageUpload__selectAnother" onClick={pickImageHandler}>
                            Cambiar
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ImageUpload
