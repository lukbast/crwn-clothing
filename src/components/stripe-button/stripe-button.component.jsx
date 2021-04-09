import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Idzo1IJD3612PvFd10bvcmkEHeEmmA5am8Tjjy8glwyCCm10OuNjnNQKxEz80QlIgfvr3GQrED3Vo4L1pKuN0UZ00v7pkppnd'
    const onToken = token => {console.log(token);
                              alert('Payment Successful');}
    return (
        <StripeCheckout
            currency='PLN'
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total  is ${price} PLN`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    ) 
}

export default StripeCheckoutButton
