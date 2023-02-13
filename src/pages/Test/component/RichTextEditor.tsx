import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [editorValue, setEditValue] = useState<string>();
  const onEditorValueChange = (newValue: string) => {
    console.log(newValue);
    setEditValue(newValue);
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image'],
    ],
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        placeholder="请输入正确答案"
        modules={modules}
        value={editorValue}
        onChange={(newValue) => {
          onEditorValueChange(newValue);
        }}
      />
    </div>
  );
};
export default RichTextEditor;
