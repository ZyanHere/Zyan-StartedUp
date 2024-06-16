"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/6763822/pexels-photo-6763822.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      150₹
                    </div>
                  </div>
                  {/* desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="">Subtotal</span>
                    <span className="">200₹</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 mb-4">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="flex justify-between text-sm">
                    <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                      View Cart
                    </button>
                    <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
