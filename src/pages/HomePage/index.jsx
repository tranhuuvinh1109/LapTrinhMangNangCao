import React, { useEffect, useState } from 'react';
import { ChooseFile, TableProjects } from '../../components';
import gif1 from '../../assets/gifs/convlayer_overview_demo.gif';
import gif2 from '../../assets/gifs/convlayer_detailedview_demo.gif';
import wallpaper from '../../assets/images/1426870.png';
import './HomePage.css';
import { useSelector } from 'react-redux';
import { FaHeadSideVirus } from 'react-icons/fa6';

const HomePage = () => {
  const project = useSelector((state) => state.project);
  const [showButton, setShowButton] = useState(true);

  const scrollToChooseFile = () => {
    const chooseFileElement = document.getElementById('main-content');

    if (chooseFileElement) {
      chooseFileElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollButton = () => {
      window.pageYOffset > 3700 ? setShowButton(false) : setShowButton(true);
    };
    window.addEventListener('scroll', handleScrollButton);
    return () => {
      window.removeEventListener('scroll', handleScrollButton);
    };
  }, []);
  return (
    <div>
      {showButton && (
        <div className="button-container text-white gap-2" onClick={scrollToChooseFile}>
          <FaHeadSideVirus className="text-3xl" />
          TRAIN NOW!!
        </div>
      )}

      <div className="w-[100%] h-[400px] mb-4">
        <img src={wallpaper} alt="wallpaper" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="w-[1000px] mx-[125px] text-[19px] text-[#444] leading-9">
        <h2 className="text-[44px] font-normal mb-7">What is a Convolutional Neural Network?</h2>
        <p>
          In machine learning, a classifier assigns a class label to a data point. For example, an image classifier
          produces a class label (e.g, bird, plane) for what objects exist within an image. A convolutional neural
          network, or CNN for short, is a type of classifier, which excels at solving this problem!
        </p>
        <p>
          A CNN is a neural network: an algorithm used to recognize patterns in data. Neural Networks in general are
          composed of a collection of neurons that are organized in layers, each with their own learnable weights and
          biases. Let’s break down a CNN into its basic building blocks.
        </p>
        <ol style={{ listStyleType: 'decimal' }}>
          <li>
            A <strong>tensor</strong> can be thought of as an n-dimensional matrix. In the CNN above, tensors will be
            3-dimensional with the exception of the output layer.
          </li>
          <li>
            A <strong>neuron</strong> can be thought of as a function that takes in multiple inputs and yields a single
            output. The outputs of neurons are represented above as the <span style={{ color: '#FF7577' }}>red</span> →
            <span style={{ color: '#60A7D7' }}>blue</span> <strong>activation maps</strong>.
          </li>
          <li>
            A <strong>layer</strong> is simply a collection of neurons with the same operation, including the same
            hyperparameters.
          </li>
          <li>
            <strong>Kernel weights and biases</strong>, while unique to each neuron, are tuned during the training
            phase, and allow the classifier to adapt to the problem and dataset provided. They are encoded in the
            visualization with a yellow → green diverging colorscale. The specific values can be viewed in the
            Interactive Formula View by clicking a neuron or by hovering over the kernel/bias in the Convolutional
            Elastic Explanation View.
          </li>
          <li>
            A CNN conveys a <strong>differentiable score function</strong>, which is represented as{' '}
            <strong>class scores</strong> in the visualization on the output layer.
          </li>
        </ol>
        <p>
          If you have studied neural networks before, these terms may sound familiar to you. So what makes a CNN
          different? CNNs utilize a special type of layer, aptly named a convolutional layer, that makes them
          well-positioned to learn from image and image-like data. Regarding image data, CNNs can be used for many
          different computer vision tasks, such as{' '}
          <span style={{ color: '#60A7D7' }}>image processing, classification, segmentation, and object detection</span>
          .
        </p>
        <p>
          In CNN Explainer, you can see how a simple CNN can be used for image classification. Because of the network’s
          simplicity, its performance isn’t perfect, but that’s okay! The network architecture,
          <span style={{ color: '#60A7D7' }}> Tiny VGG</span>, used in CNN Explainer contains many of the same layers
          and operations used in state-of-the-art CNNs today, but on a smaller scale. This way, it will be easier to
          understand getting started.
        </p>
      </div>
      <div className="w-[1000px] mx-[125px] text-[19px] text-[#444] leading-9 pt-5">
        <h2 className="text-[44px] font-normal mb-7">What does each layer of the network do?</h2>
        <h2 className="text-[35px] font-normal mb-3">Input Layer</h2>
        <p>
          The input layer (leftmost layer) represents the input image into the CNN. Because we use RGB images as input,
          the input layer has three channels, corresponding to the red, green, and blue channels, respectively, which
          are shown in this layer.{' '}
        </p>
        <h2 className="text-[35px] font-normal mb-3">Convolutional Layers</h2>
        <p>
          The convolutional layers are the foundation of CNN, as they contain the learned kernels (weights), which
          extract features that distinguish different images from one another—this is what we want for classification!
          As you interact with the convolutional layer, you will notice links between the previous layers and the
          convolutional layers. Each link represents a unique kernel, which is used for the convolution operation to
          produce the current convolutional neuron’s output or activation map.
        </p>
        <p>
          The convolutional neuron performs an elementwise dot product with a unique kernel and the output of the
          previous layer’s corresponding neuron. This will yield as many intermediate results as there are unique
          kernels. The convolutional neuron is the result of all of the intermediate results summed together with the
          learned bias.
        </p>
        <p>
          For example, let’s look at the first convolutional layer in the Tiny VGG architecture above. Notice that there
          are 10 neurons in this layer, but only 3 neurons in the previous layer. In the Tiny VGG architecture,
          convolutional layers are fully-connected, meaning each neuron is connected to every other neuron in the
          previous layer. Focusing on the output of the topmost convolutional neuron from the first convolutional layer,
          we see that there are 3 unique kernels when we hover over the activation map.
        </p>
        <div className="w-full flex justify-center my-5">
          <div className="w-[400px] h-fit">
            <img src={gif1} alt="overview-demo" />
          </div>
        </div>
        <p>
          The size of these kernels is a hyper-parameter specified by the designers of the network architecture. In
          order to produce the output of the convolutional neuron (activation map), we must perform an elementwise dot
          product with the output of the previous layer and the unique kernel learned by the network. In TinyVGG, the
          dot product operation uses a stride of 1, which means that the kernel is shifted over 1 pixel per dot product,
          but this is a hyperparameter that the network architecture designer can adjust to better fit their dataset. We
          must do this for all 3 kernels, which will yield 3 intermediate results.
        </p>
        <div className="w-full flex justify-center my-5">
          <div className="w-[600px] h-fit">
            <img src={gif2} alt="detailviews-demo" />
          </div>
        </div>
        <p>
          Then, an elementwise sum is performed containing all 3 intermediate results along with the bias the network
          has learned. After this, the resulting 2-dimensional tensor will be the activation map viewable on the
          interface above for the topmost neuron in the first convolutional layer. This same operation must be applied
          to produce each neuron’s activation map.
        </p>
        <p>
          With some simple math, we are able to deduce that there are 3 x 10 = 30 unique kernels, each of size 3x3,
          applied in the first convolutional layer. The connectivity between the convolutional layer and the previous
          layer is a design decision when building a network architecture, which will affect the number of kernels per
          convolutional layer. Click around the visualization to better understand the operations behind the
          convolutional layer. See if you can follow the example above!
        </p>
      </div>
      <div id="main-content">
        <ChooseFile />
        <div className="mb-[100px]">
          <TableProjects projects={project.project} className="" />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
