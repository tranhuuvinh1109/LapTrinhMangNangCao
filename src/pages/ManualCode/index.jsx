import React, { useState } from 'react';
import './ManualCode.css';
import CodeMirror, { EditorState, EditorView } from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { python } from '@codemirror/lang-python';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FiCheck, FiCopy } from 'react-icons/fi';

const ManualCode = () => {
  const [code, setCode] = useState(
    `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

  number = 5  # Thay đổi số này để tính giai thừa của một số khác
  result = factorial(number)
  print(f"Giai thừa của {number} là {result}")`,
  );
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <h3>Manual Code</h3>
      <div className="bg-[#333338] w-[60%]">
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
          height="300px"
          theme={githubDark}
          extensions={[python({ python: true }), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
        />
      </div>
    </div>
  );
};

export default ManualCode;
