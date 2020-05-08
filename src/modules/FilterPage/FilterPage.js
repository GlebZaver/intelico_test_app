import React from "react";

import { TextFieldMap, Select, Button } from "components";
import {
	textFieldsData,
	selectBuyerOptions,
	selectUsersOptions,
	selectAvatarData,
} from "./formsData";

import { LogoIcon } from "assets";

import classes from "elements/globalStyles/index.module.css";

import styles from "./FilterPageStyles.module.css";

function FilterPage() {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className={styles.filterPageWrapper}>
			<p className={styles.pageTitle}>New Page</p>
			<div className={styles.logoContainer}>
				<img className={styles.logoImage} src={LogoIcon} alt="App logo" />
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={classes.selectsWrapper}>
					<Select
						name="selectBuyers"
						placeholder="Select buyer"
						selectFieldsData={selectBuyerOptions}
						withSearch
					/>
					<Select
						name="selectUsers"
						placeholder="Select user"
						selectFieldsData={selectUsersOptions}
						withAvatar
						avatarData={selectAvatarData}
					/>
				</div>
				<TextFieldMap textFieldsData={textFieldsData} />
				<div className={styles.buttonWrapper}>
					<Button text="Reset" outlined />
					<Button text="Filter" />
				</div>
			</form>
		</div>
	);
}

export default FilterPage;
