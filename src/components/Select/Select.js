import React, { memo, useState, useRef } from "react";
import PropTypes from "prop-types";

import { ArrowIcon, SearchIcon } from "assets";
import useOutsideClick from "../../hooks/useOutsideClick";

import styles from "./SelectStyles.module.css";

function Select({
	selectFieldsData,
	placeholder,
	name,
	withSearch,
	withAvatar,
	avatarData,
}) {
	const [selectValue, setSelectValue] = useState("");
	const [selectAvatar, setSelectAvatar] = useState(null);
	const [isOpened, setIsOpened] = useState(false);
	const [optionValues, setOptionsValues] = useState(selectFieldsData);

	const ref = useRef();

	useOutsideClick(ref, () => {
		setIsOpened(false);
		setOptionsValues(selectFieldsData);
	});

	const openSelectHandler = () => {
		setIsOpened(!isOpened);
	};

	const searchOptinsData = (event) => {
		const newOptions = [];
		selectFieldsData.forEach((options) => {
			if (options.indexOf(event.target.value) !== -1) {
				return newOptions.push(options);
			}
		});

		setOptionsValues(newOptions);
	};

	const searchInput = (
		<div className={styles.selectInputContainer}>
			<div className={styles.searchIconContainer}>
				<img className={styles.searchIcon} src={SearchIcon} alt="Search icon" />
			</div>
			<input className={styles.selectInput} onChange={searchOptinsData} />
		</div>
	);

	const usersSummary = <div className={styles.usersSummary}>All users</div>;

	const selectOptions = optionValues
		.filter((option) => option !== undefined)
		.map((optionsName, index) => {
			const onChangeHandler = () => {
				setSelectValue(optionsName);
				if (withAvatar) {
					setSelectAvatar(avatarData[index]);
				}
				setIsOpened(false);
			};

			return (
				<div
					key={`select-options-${optionsName}`}
					className={
						selectValue === optionsName ? styles.optionsAtive : styles.options
					}
					onClick={onChangeHandler}
				>
					{withAvatar ? (
						<div className={styles.avatarContainer}>
							<img
								className={styles.avatarImg}
								src={avatarData[index]}
								alt="User avatar"
							/>
						</div>
					) : null}
					{optionsName}
				</div>
			);
		});

	const renderOptions = () => {
		return (
			isOpened && (
				<div className={styles.optionsWrapper}>
					{withSearch && searchInput}
					{withAvatar && usersSummary}
					{selectOptions}
				</div>
			)
		);
	};

	return (
		<div ref={ref} className={styles.selectsControl}>
			<div className={styles.select} onClick={openSelectHandler}>
				<div className={styles.selectValue}>
					{selectAvatar !== null && (
						<div className={styles.avatarContainer}>
							<img
								className={styles.avatarImg}
								src={selectAvatar}
								alt="User avatar"
							/>
						</div>
					)}
					<input
						className={styles.input}
						name={name}
						value={selectValue}
						placeholder={placeholder}
						disabled
					/>
				</div>
				<div className={styles.arrowIconContainer}>
					<img
						className={isOpened ? styles.arrowIconOpen : styles.arrowIconClose}
						src={ArrowIcon}
						alt="Arrow icon"
					/>
				</div>
			</div>
			{renderOptions()}
		</div>
	);
}

Select.defaultProps = {
	placeholder: "Select",
	withSearch: false,
	withAvatar: false,
	avatarData: [],
};

Select.propTypes = {
	selectFieldsData: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	withSearch: PropTypes.bool,
	withAvatar: PropTypes.bool,
	avatarData: PropTypes.array,
};

export default memo(Select);
