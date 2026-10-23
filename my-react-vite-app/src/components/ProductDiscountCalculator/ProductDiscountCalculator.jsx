import { useActionState } from "react";

const checkPromoCode = async (promoCode) => {
    await new Promise(resolve => setTimeout(resolve, 1500));

    if(promoCode.toLowerCase() === 'save10') {
        return 10
    } else if(promoCode.toLowerCase() === 'save20') {
        return 20
    } else  {
        throw new Error('Invalid promo code');
    }
}

const submitForm = async(prevState, formData) => {
    const price = Number(formData.get('price'));
    const promoCode = formData.get('promoCode');

    const calculationCount = prevState.calculationCount + 1;

    try{
        return {
            price,
            discountPercent: await checkPromoCode(promoCode),
            message: 'Discount applied!',
            calculationCount,
            success: true
        }
    } catch(err) {
        console.log('error ---->> ',  err);
        return {
            price,
            discountPercent: 0,
            message: err.message,
            calculationCount,
            success: false
        }
    }
}

const ProductDiscountCalculator = () => {

    const [state, formAction, isPending] = useActionState(
        submitForm,
        {
            price: 0,
            discountPercent: null,
            message: '',
            calculationCount: 0,
            success: null
        }
    )

    const finalPrice = state.price - (state.price / 100 * state.discountPercent)

    return (
        <section>
            <h2>Discaunt Calculator - [calculation number: {state.calculationCount}]</h2>
            <form action={formAction}>
                <div className="form-group">
                    <label htmlFor="price">Product Price (UAH)</label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        required 
                        min="1"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="promoCode">Promo Code</label>
                    <input type="text" name="promoCode" id="promoCode" required />
                </div>
                <button disabled={isPending}>
                    {isPending? 'Calculating...' : 'Apply Discount'}
                </button>
            </form>

            {state.message && (
                <div className="calculating-details">
                    <h3 style={{color: !state.success ? 'red' : 'green'}}>
                        {
                            state.message
                        }
                    </h3>
                    <div>
                        <span>Original Price</span>: 
                        <strong>{state.price}UAH</strong>
                    </div>
                    <div>
                        <span>Discount</span>: 
                        <strong>{state.discountPercent}%</strong>
                    </div>
                    <div>
                        <span>Final Price</span>: 
                        <strong>{finalPrice}UAH</strong>
                    </div>
                </div>
            )}
            
        </section>
    )
}

export default ProductDiscountCalculator;