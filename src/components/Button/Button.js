import React from "react";
import PropTypes from "prop-types";

import styles from "./ButtonStyle.module.css";

function Button({ text, outlined }) {
	return (
		<div className={styles.buttonControl}>
			<button className={outlined ? styles.outlined : styles.button}>
				{text}
			</button>
		</div>
	);
}

Button.defaultProps = {
	text: "Filter",
	outlined: false,
};

Button.propTypes = {
	text: PropTypes.string,
	outlined: PropTypes.bool,
};

export default Button;
