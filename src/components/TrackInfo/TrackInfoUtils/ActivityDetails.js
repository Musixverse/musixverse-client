import PriceUpdatedActivity from "./PriceUpdatedActivity";
import PurchasedActivity from "./PurchasedActivity";
import OnSaleUpdatedActivity from "./OnSaleUpdatedActivity";

const ActivityDetails = ({ activity }) => {
	return (
		<div className="flex mb-4">
			{"newPrice" in activity ? (
				<PriceUpdatedActivity activity={activity} />
			) : "newOwner" in activity ? (
				<PurchasedActivity activity={activity} />
			) : "onSale" in activity ? (
				<OnSaleUpdatedActivity activity={activity} />
			) : null}
		</div>
	);
};

export default ActivityDetails;
