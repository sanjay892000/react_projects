import { Link } from "react-router-dom";
import { useState } from "react";
import emptyCart from "../assets/emptycart.png";
import { useShopState } from "../contextapi/ShopState";


const Carts = () => {

  const { cartItems, increaseQty, decreaseQty, removeItem, subtotal } = useShopState()


  // 🛒 Empty Cart UI
  if (cartItems.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <img src={emptyCart} alt="Empty Cart" className="mx-auto w-52 mb-6" />

          <h2 className="text-2xl font-semibold mb-3">
            Your cart is empty
          </h2>

          <p className="text-gray-600 mb-8">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>

          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="border-b">
            <tr className="text-left text-sm font-semibold">
              <th className="py-4">Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Total</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b text-sm">
                {/* Image */}
                <td className="py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover"
                  />
                </td>

                {/* Title */}
                <td className="max-w-md">{item.name}</td>

                {/* Price */}
                <td>${item.new_price}</td>

                {/* Size */}
                <td>{item.size}</td>

                {/* Quantity */}
                <td>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id, item.size)}
                      className="w-8 h-8 border text-lg"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id, item.size)}
                      className="w-8 h-8 border text-lg"
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Total */}
                <td>${item.new_price * item.quantity}</td>

                {/* Remove */}
                <td
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-center text-xl cursor-pointer text-gray-500 hover:text-black"
                >
                  ×
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
        {/* Cart Totals */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Cart Totals</h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span>Sub total</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Delivery charge</span>
              <span>$0</span>
            </div>

            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </div>

        {/* Promo Code */}
        <div>
          <p className="mb-4 text-sm">
            If you have promo code, enter it here
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-1 border px-4 py-3 outline-none"
            />
            <button className="bg-black text-white px-6">
              Apply
            </button>
          </div>

          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-10 py-4 font-medium">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carts;
