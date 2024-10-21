import { ProductCard } from "../components/uis/card/ProductCard";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";

const HomePage = () => {
  const [isLoading, setIsloading] = useState(false);
  const [productData, setProductData] = useState([]);

  const fetchProducts = async () => {
    setIsloading(true);
    try {
      const fetchData = await axiosInstance.get("/products");
      // console.log(fetchData.data);
      setProductData(fetchData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const product = productData.map((value, index) => {
    return (
      <div key={index} className="">
        <ProductCard
          productName={value.name}
          price={value.price}
          stock={value.stock}
          link={value.imageUrl}
        />
      </div>
    );
  });
  return (
    <>
      <div className="">
        {/* <Navbar /> */}
        <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
          <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Become a trend-setter with us.
            </h1>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground">
              FastCampusCommerce provides you with the finest clothings and ensures your confidenece
              throughout your days.
            </p>
          </div>
          {isLoading ? (
            <p>Sedang Dimuat...</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">{product}</div>
          )}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

// mengapa di export dibawah
// agar disaat pemanggilaan atau import tidak perlu menggunakan kurung kurawal
export default HomePage;
