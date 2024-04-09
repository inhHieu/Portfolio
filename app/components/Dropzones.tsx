import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzonesProps {
    handleChange: (file: File[]) => void;
}
interface PreviewFile extends File {
    preview: string;
}



export default function Dropzones({ handleChange }: DropzonesProps) {
    const [files, setFiles] = useState<PreviewFile[]>([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: (acceptedFiles: File[]) => {
            const updatedFiles: PreviewFile[] = acceptedFiles.map(file => {
                const previewFile = file as PreviewFile;
                previewFile.preview = URL.createObjectURL(file);
                return previewFile;
            });
            handleChange(acceptedFiles);
            setFiles(updatedFiles);
            console.log(acceptedFiles)
        }
    });

    const thumbs = files.map(file => (
        <div key={file.name} className=' inline-flex h-48 max-w-40 '>
            <div className=' h-full flex overflow-hidden '>
                <img
                    className=' h-full w-full'
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}
                className=' relative min-h-48 ' >
                <input {...getInputProps()} />
                <p className=" absolute  h-min w-full text-center">Drop the preview images here</p>
                <aside className=' w-full h-full flex flex-wrap gap-4 ' >
                    {thumbs}
                </aside>
            </div>

        </section>
    );
}