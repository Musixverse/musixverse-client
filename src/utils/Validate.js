/**
 * @dev regex method validations, status to be checked and error/success box to be shown
 * @returns validation status & display message
 */

import Moralis from "moralis";

export async function isEmailValid(email) {
	const emailRegex = new RegExp(
		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	);
	if (!emailRegex.test(email)) {
		return {
			status: false,
			message: "Please enter a valid email",
		};
	}

	return {
		status: true,
		message: "",
	};
}

export async function isEmailValidAndAvailable(email) {
	const emailRegex = new RegExp(
		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	);
	if (!emailRegex.test(email)) {
		return {
			status: false,
			message: "Please enter a valid email",
		};
	}
	const emailExists = await Moralis.Cloud.run("checkEmailExists", { email: email });
	if (emailExists) {
		return {
			status: false,
			title: "An account with this email already exists",
			message: "Please sign up using another email address.",
		};
	}

	return {
		status: true,
		message: "",
	};
}

export async function isUsernameValidAndAvailable(username) {
	const usernameRegex = /^\w+$/;
	if (username.length < 2) {
		return {
			status: false,
			message: "Username length should be greater than 1",
		};
	} else if (!usernameRegex.test(username)) {
		return {
			status: false,
			message: "Username can only contain alphabets, numbers, and '_'",
		};
	}
	const usernameExists = await Moralis.Cloud.run("checkUsernameAvailability", { username: username });
	if (usernameExists) {
		return {
			status: false,
			title: "Username already exists!",
			message: "Please choose another username.",
		};
	}

	return { status: true, message: "" };
}

export function isNameValid(name) {
	if (name.trim().length === 0) return { status: false, message: "Name field can't be empty" };

	return { status: true, message: "" };
}

export function isIsrcValid(isrc) {
	const isrcRegex = new RegExp(/^[A-Z]{2}-?\w{3}-?\d{2}-?\d{5}$/g);
	if (!isrcRegex.test(isrc)) {
		return {
			status: false,
			title: "Invalid ISRC",
			message: "Please enter a valid ISRC or leave it blank",
		};
	}

	return { status: true, message: "" };
}
