import  { useRef, FC} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface QuilEditorProps {
    description : string;
    setDescription : (text : string) => void
}

export const QuilEditor : FC <QuilEditorProps> = ({description, setDescription})=> {
    const quillRef = useRef(null);

    const toolbarOptions = [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
    ];
    

    return (
        <ReactQuill
        ref = {quillRef}
        value={description}
        onChange={setDescription}
        modules={{ toolbar: toolbarOptions }}
        
        />
    )
}

