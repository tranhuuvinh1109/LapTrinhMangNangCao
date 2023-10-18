import React, { useState } from 'react';
import './ManualCode.css';
import CodeMirror, { EditorState, EditorView } from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { python } from '@codemirror/lang-python';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FiCheck, FiCopy } from 'react-icons/fi';

const ManualCode = () => {
  const [code, setCode] = useState(
    `import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
path_model = '' #Change the downloaded model path on your device
model = keras.models.load_model(path_model)
class_labels = [] # Difine the class labels

def DetectionObject(image_path):
    img = load_img(image_path, target_size=(128, 128))
    img = img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = keras.applications.resnet50.preprocess_input(img)
    predictions = model.predict(img)
    predicted_class_index = np.argmax(predictions[0])
    predicted_class = class_labels[predicted_class_index]
    return predicted_class

image_path = '' # Change the path to the image you want to recognize
predicted_label = DetectionObject(image_path)
print(f'Predicted Label: {predicted_label}')`,
  );
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mt-32 flex flex-col items-center justify-center">
      <div className="bg-[#333338] w-9/12">
        <div className=" flex items-center justify-between">
          <div className="text-white flex justify-end py-2 px-4 text-sm">
            <span>python</span>
          </div>
          <div className="text-white flex justify-end py-2 px-3">
            <CopyToClipboard text={code} onCopy={handleCopyClick}>
              <div className="flex flex-row gap-2 items-center copy_to_clipboard">
                {copied ? <FiCheck className="text-md" /> : <FiCopy className="text-md" />}
                <span className="text-sm">{copied ? 'Copied!' : 'Copy code'}</span>
              </div>
            </CopyToClipboard>
          </div>
        </div>

        <CodeMirror
          value={code}
          onBeforeChange={(_editor, _data, value) => setCode(value)}
          height="500px"
          theme={githubDark}
          extensions={[python({ python: true }), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
        />
      </div>
    </div>
  );
};

export default ManualCode;
