import transakSDK from "@transak/transak-sdk";

function loadTransak(user) {
	let transak = new transakSDK({
		apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY,
		environment: process.env.NEXT_PUBLIC_TRANSAK_ENVIRONMENT,
		widgetHeight: "625px",
		widgetWidth: "400px",
		defaultCryptoCurrency: "MATIC",
		cryptoCurrencyList: ["MATIC"],
		defaultNetwork: "polygon",
		// fiatCurrency: "INR",
		defaultFiatAmount: 500,
		exchangeScreenTitle: "Get MATIC to purchase NFTs",
		themeColor: "#5AB510",
		hideMenu: true,
		isFeeCalculationHidden: true,
		walletAddress: user.attributes.ethAddress,
		email: user.attributes.email,
	});

	transak.init();

	// To get all the events
	transak.on(transak.ALL_EVENTS, (data) => {
		console.log(data);
	});

	// This will trigger when the user marks payment is made.
	transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
		console.log(orderData);
		transak.close();
	});
}

module.exports = { loadTransak };
