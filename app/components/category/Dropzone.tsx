import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneSingleProps {
  handleChange: (file: File[] ) => void;
}

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export default function DropzoneSingle({ handleChange }: DropzoneSingleProps) {
  const [file, setFile] = useState<File | null>(null);
  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as FlexDirection,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#bdbdbd',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };

  const focusedStyle = {
    borderColor: '#2196f3',
  };

  const acceptStyle = {
    borderColor: '#00e676',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {'image/*':[]},
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      handleChange(acceptedFiles);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <section className="h-full">
      <div
        {...getRootProps({ style })}
        className=" relative max-h-48 h-full cursor-pointer grid place-items-center"
      >
        <input {...getInputProps()} accept="image/jpeg,image/png,image/jpg" />
        <p className=" absolute  h-full w-full text-center">Drop the cover image here</p>
        {file && (
          <Image
              src={URL.createObjectURL(file)} alt="cover image preview"
              style={{ zIndex:10, objectFit: 'contain' }}
              fill
              onLoad={() => URL.revokeObjectURL(URL.createObjectURL(file))}
          />
        )}
      </div>
    </section>
  );
}