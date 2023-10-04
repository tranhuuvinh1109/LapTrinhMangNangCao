import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";

export default function ImageClassifier() {
  const [imageURL, setImageURL] = useState(""); // State lưu đường dẫn ảnh
  const [showInput, setShowInput] = useState(true); // State để ẩn/hiện input file
  const [showSubmitInfo, setShowSubmitInfo] = useState(false); // State để hiển thị thông tin khi submit
  const [showPredictedLabel, setShowPredictedLabel] = useState(false);
  const [predictedLabel, setPredictedLabel] = useState("");
  const [predictedAccuracy, setPredictedAccuracy] = useState(0);
  const [showPredictedInfo, setShowPredictedInfo] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Xử lý sự kiện khi người dùng chọn hình ảnh từ máy tính
  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        // Lấy đường dẫn của ảnh và cập nhật state
        setImageURL(reader.result);
        setShowInput(false); // Ẩn input file sau khi đã tải lên
      }
    };

    reader.readAsDataURL(file);

    const fakePredictedLabel = "Fake Label XYZ";
    const fakePredictedAccuracy = Math.random() * 100; // Random accuracy for demonstration

    // Update the state with the fake predicted label and accuracy
    setPredictedLabel(fakePredictedLabel);
    setPredictedAccuracy(fakePredictedAccuracy);
    setShowPredictedInfo(true); // Show the predicted info

    // For this example, hide the predicted info after a few seconds
    setTimeout(() => {
      setShowPredictedInfo(false);
    }, 5000); // Simulate hiding after 5 seconds

    // For this example, we'll set a fake predicted label after a delay
    setTimeout(() => {
      setShowPredictedLabel(true);
    }, 2000); // Simulate a delay for processing

    // Update the state to show the submit info when image is uploaded
    setShowSubmitInfo(true);
  }

  function handleRemoveImage() {
    setImageURL(""); // Xoá ảnh
    setShowInput(true); // Hiển thị lại input
    setShowSubmitInfo(false); // Reset the submit info display
  }

  const handleRotateImage = (event) => {
    event.preventDefault();
    setRotation(rotation + 90);
  };

  return (
    <>
      <div className="container mx-auto border-sky-800 border-2 rounded-xl p-4">
        <div className="flex">
          {/* Cột 1 */}
          <div className="flex-1 mr-2 border-sky-800 border-2 rounded-xl py-2">
            <div className="h-5/6 mt-2">
              <form className="flex items-center space-x-6 justify-center">
                {imageURL && (
                  <div className="container mx-auto relative flex items-center justify-center">
                    <img
                      src={imageURL}
                      alt="Uploaded"
                      className={`object-fill h-48 w-48 rounded-xl`}
                      style={{ transform: `rotate(${rotation}deg)` }}
                    />

                    <div className="absolute top-0 right-0 mr-24 flex">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                        onClick={handleRotateImage} // Gọi hàm rotate ảnh
                      >
                        <RefreshIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
                {showInput && (
                  <input
                    type="file"
                    className="text-xl text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 hover:file:bg-violet-100 file:cursor-pointer "
                    placeholder="Upload an image"
                    onChange={handleImageUpload}
                  />
                )}
              </form>
            </div>
            <div className="h-max flex justify-around">
              {imageURL && ( // Show the buttons only if an image is uploaded
                <>
                  <button
                    type="submit"
                    class="py-2 px-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm"
                    onClick={handleRemoveImage}
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    class="py-2 px-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm"
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Cột 2 */}
          <div className="flex-none my-auto mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24 text-sky-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
          <div className="flex-1 border-sky-800 border-2 rounded-xl p-4">
            {showSubmitInfo && imageURL && (
              <div>
                <div className="border-sky-800 border-2 rounded-xl p-2 mb-2">
                  <h1>Fake Predicted Label:</h1>
                  <p>Fake Label XYZ</p>
                </div>
                <div className="border-sky-800 border-2 rounded-xl p-2">
                  <h1>Accuracy:</h1>
                  <p>{predictedAccuracy.toFixed(2)}%</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
