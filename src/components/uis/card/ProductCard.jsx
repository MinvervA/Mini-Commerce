import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

/* eslint-disable */
export const ProductCard = ({ link, productName, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const addQty = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const subQty = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden">
        <img className="w-full" src={link} alt="product" />
      </div>

      <div className="">
        <p className="text-md">{productName}</p>
        <p className="text-xl font-semibold">Rp {price?.toLocaleString("id-ID")}</p>
        <p className="text-muted-foreground text-sm">In stock : {stock}</p>
      </div>

      <div className="">
        {/* Button Quantity */}
        <div className="flex justify-between items-center">
          <Button disabled={quantity <= 0} onClick={subQty} size="icon" variant="icon">
            <IoIosRemove className="size-5" />
          </Button>
          <p className="text-lg font-bold">{quantity}</p>
          <Button disabled={quantity >= stock} onClick={addQty} size="icon" variant="icon">
            <IoIosAdd className="size-5" />
          </Button>
        </div>
        {/* Button Add to Cart */}
        <Button disabled={!stock} className="mt-5 w-full">
          {stock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  );
};
