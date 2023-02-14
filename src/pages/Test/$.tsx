import { useParams } from '@umijs/max';
import React, { useEffect } from 'react';
import RichTextEditor from './component/RichTextEditor';

const Predict: React.FC = () => {
  const parmas = useParams();
  useEffect(() => {
    let id = parmas[Object.keys(parmas)[0]];
    console.log(id);
  }, []);
  return <RichTextEditor></RichTextEditor>;
};

export default Predict;
