import CheckoutOverview from "../features/checkout/CheckoutOverview";

import CheckoutForm from "../features/checkout/CheckoutForm";

export default function Checkout() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-4">
      <h2 className="text-xl font-semibold">Check your full order below</h2>
      <CheckoutOverview />
      <CheckoutForm />
    </div>
  );
}
