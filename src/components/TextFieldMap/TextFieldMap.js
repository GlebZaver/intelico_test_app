import React from "react";
import PropTypes from "prop-types";

import styles from "./TextFieldStyles.module.css";

function TextFieldMap({ textFieldsData }) {
	const textFields = Object.keys(textFieldsData).map((fieldName) => {
		return (
			<div key={`fields-form-${fieldName}`} className={styles.textFieldControl}>
				<input
					className={styles.textField}
					name={fieldName}
					placeholder={textFieldsData[fieldName]?.placeholder || "Text field"}
					type={textFieldsData[fieldName]?.type || "text"}
				/>
			</div>
		);
	});

	return <div className={styles.textFieldsWrapper}>{textFields}</div>;
}

TextFieldMap.propTypes = {
	textFieldsData: PropTypes.object.isRequired,
};

export default TextFieldMap;
