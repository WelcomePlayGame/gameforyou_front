import { useRef, useEffect, FC, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

interface QuilEditorProps {
    description: string;
    setDescription: (text: string) => void;
}

export const QuilEditor: FC<QuilEditorProps> = ({ description, setDescription }) => {
    const quillRef = useRef<ReactQuill | null>(null);
    const [images, setImages] = useState<{ [url: string]: number }>({});

    const handleImageUpload = async () => {
        const quill = quillRef.current!.getEditor();
        const range = quill.getSelection(true);
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
            const file = input.files && input.files[0];
            if (file) {
                const formData = new FormData();
                formData.append('photo', file);
                try {
                    const response = await axios.post('http://localhost:8080/artile_url/add', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        }
                    });
                    const result = response.data;
                    setImages(prevImages => ({ ...prevImages, [result.url]: result.id }));
                    quill.insertEmbed(range.index, 'image', result.url);
                    quill.setSelection({ index: range.index + 1, length: 0 });

                } catch (error) {
                    console.error("Error uploading image:", error);
                    alert("Ошибка загрузки изображения. Пожалуйста, попробуйте еще раз.");
                }
            }
        };
    };

    useEffect(() => {
        if (quillRef.current) {
            const quill = quillRef.current.getEditor();
    
            // Добавляем обработчик для загрузки изображений
            const toolbar = quill.getModule("toolbar");
            toolbar.addHandler("image", handleImageUpload);
    
            // Обработчик изменений текста для удаления изображений
            const handleTextChange = () => {
                const currentContent = quill.getContents();
                if (!currentContent || !currentContent.ops) return;
    
                // Обход всех изображений в состоянии и проверка их наличия в контенте
                for (const url in images) {
                    if (!currentContent.ops.some(op => op.insert && op.insert.image === url)) {
                        // Если изображение отсутствует, отправляем запрос на удаление
                        const id = images[url];
                        axios.delete(`http://localhost:8080/artile_url/delete/${id}`)
                            .then(() => {
                                // Удаляем изображение из состояния при успешном удалении
                                setImages(prevImages => {
                                    const newImages = { ...prevImages };
                                    delete newImages[url];
                                    return newImages;
                                });
                            })
                            .catch(error => {
                                console.error('Error deleting image:', error);
                            });
                    }
                }
            };
    
            // Подписываемся на событие 'text-change' для отслеживания изменений
            quill.on('text-change', handleTextChange);
    
            // Возвращаем функцию очистки для отписки от событий при размонтировании компонента
            return () => {
                // Отписываемся от события 'text-change'
                quill.off('text-change', handleTextChange);
            };
            
        }
    }, [images]);
    

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['image'],
        ['clean']
    ];

    return (
        <ReactQuill
            ref={quillRef}
            value={description}
            onChange={setDescription}
            modules={{
                toolbar: {
                    container: toolbarOptions,
                }
            }}
        />
    );
};
