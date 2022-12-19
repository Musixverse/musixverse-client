import PriceUpdatedActivity from "./PriceUpdatedActivity";
import PurchasedActivity from "./PurchasedActivity";
import OnSaleUpdatedActivity from "./OnSaleUpdatedActivity";
import CommentUpdatedActivity from "./CommentUpdatedActivity";

const ActivityDetails = ({ activity }) => {
	return (
		<div className="flex mb-4">
			{"newPrice" in activity ? (
				<PriceUpdatedActivity activity={activity} />
			) : "newOwner" in activity ? (
				<PurchasedActivity activity={activity} />
			) : "onSale" in activity ? (
				<OnSaleUpdatedActivity activity={activity} />
			) : "newComment" in activity ? (
				<CommentUpdatedActivity activity={activity} />
			) : null}
		</div>
	);
};

export default ActivityDetails;
