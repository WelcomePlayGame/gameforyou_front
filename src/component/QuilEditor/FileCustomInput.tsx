import React, {FC} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SetImageType = (file : File) => void

export const FileCustomInput : FC<{
    setImageState : SetImageType,
    file : File | undefined
    imageSize : {
        width : number,
        height : number,
    }
    maxSize : number
}> = ({ setImageState, imageSize , maxSize, file })=> {

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileSize = file.size / (1024 * 1024);

            if (fileSize <= maxSize) {
                const img = new Image();
                img.onload = (ev: Event) => {
                    if (img.width === imageSize.width && img.height === imageSize.height) {
                        setImageState(file);
                    } else {
                        toast.error(`Будь-ласка, завантажте постер розміром ${imageSize.width}*${imageSize.height} пікселів`);
                    }
                };
                img.onerror = function () {
                    toast.error('краххх...помилка при читанні файла.');
                };
                img.src = URL.createObjectURL(file);
            } else {
                toast.error(`Файл занадто великий. Будь ласка, завантажте файл не більше ${maxSize} МБ.`);
            }
        }
    };





    return (
        <div className="custom-file-input">
            <input
                type="file"
                accept=".jpeg,.jpg,.png,.webp"
                style={{ display: 'none' }}
                onChange={handleChange}
                id={`fileInput-${imageSize.width}x${imageSize.height}`}
                required
            />
            <label htmlFor={`fileInput-${imageSize.width}x${imageSize.height}`} className="file-label">
                <div className="image-hint">
                    <img src="/icons/upload.png" alt="Подсказка" className='image_upload' />
                </div>
                <div>
                <span>{`${imageSize.width}x${imageSize.height}`}</span>
                </div>
                <div>{file?.name}</div>
            </label>
        </div>
    )
}