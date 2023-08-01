import AccountInfo from "./AccountInfo";
import DeleteAccount from "./DeleteAccount";
import DeliveryAddress from "./DeliveryAddress";
import OrderHistory from "./OrderHistory";
import PendingRating from "./PendingRating";
import Wallet from "./Wallet";

const ProfileNav = () => {
  return (
    <div>
      <AccountInfo />
      <DeliveryAddress />
      <OrderHistory />
      <PendingRating />
      <Wallet />
      <DeleteAccount />
    </div>
  );
};

export default ProfileNav;
