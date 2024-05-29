import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm ";

// TODO: add pubisebole key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to et"}></SectionTitle>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;