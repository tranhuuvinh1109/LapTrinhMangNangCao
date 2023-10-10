import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import "./ProgressBarAnimation.css";


const ProgressBarAnimation = ({ progress, size = 'small' || 'medium' || 'large' }) => {
	const progressBarRef = useRef(null);

	useEffect(() => {
		const progressBar = progressBarRef.current;

		let randomTime = Math.floor(Math.random() * 3000);
		let state = progress;
		setTimeout(() => {
			if (progress === 100) {
				gsap.to(progressBar, {
					x: `${state}%`,
					duration: 2,
					backgroundColor: "#4895ef",
				});
			} else {
				console.log({ progress })
				gsap.to(progressBar, {
					x: `${state}%`,
					duration: 2
				});
			}
		}, randomTime);
	}, [progress]);

	return (
		<div className='progressBarAnimationContrainer'>
			<div className={ `progressBarAnimationContent ${size}` } onClick={ () => console.log(progress) }>
				<div ref={ progressBarRef } className="progressBarAnmation">
				</div>
			</div>
		</div>
	);
};
ProgressBarAnimation.defaultProps = {
	size: 'medium',
}
ProgressBarAnimation.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ProgressBarAnimation;
