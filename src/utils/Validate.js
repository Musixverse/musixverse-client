/**
 * @dev regex method validations, status to be checked and error/success box to be shown
 * @returns validation status & display message
 */

import Moralis from "moralis";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../config/constants";

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

	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });
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
	if (username.trim().length === 0) return { status: false, title: "Username can't be empty", message: "Please choose another username" };

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

	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });
	const usernameExists = await Moralis.Cloud.run("checkUsernameAvailability", { username: username });
	if (usernameExists || username === "band" || username === "user" || username === "admin") {
		return {
			status: false,
			title: "Username already exists!",
			message: "Please choose another username.",
		};
	}

	return { status: true, message: "" };
}

export function isNameValid(name) {
	if (name.trim().length === 0) return { status: false, title: "Name can't be empty", message: "Please choose another name" };

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

export async function isBandUsernameValidAndAvailable(username) {
	if (username.trim().length === 0) return { status: false, title: "Username can't be empty", message: "Please choose another username" };

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

	await Moralis.start({ serverUrl: MORALIS_SERVER_URL, appId: MORALIS_APP_ID });
	const usernameExists = await Moralis.Cloud.run("checkBandUsernameAvailability", { username: username });
	if (usernameExists || username === "band" || username === "user" || username === "admin") {
		return {
			status: false,
			title: "Band username already exists!",
			message: "Please choose another username.",
		};
	}

	return { status: true, message: "" };
}
