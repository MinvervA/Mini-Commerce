import { ProductCard } from "../components/uis/card/ProductCard";

const productsRaw = [
  {
    name: "Sage Green Tank Top",
    price: 110000,
    imageUrl:
      "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/9494f9a3b7cbccb039e3800d698f8d153e2f05aa_xxl-1.jpg",
    stock: 3,
  },
  {
    name: "Dark Blue Oversize T-Shirt",
    price: 135000,
    imageUrl:
      "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/fdab7c354797bac6536436f6a399f028e20717b4_xxl-1.jpg",
    stock: 0,
  },
];

const HomePage = () => {
  const product = productsRaw.map((value, index) => {
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

          <div className="grid grid-cols-2 gap-4">{product}</div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

// mengapa di export dibawah
// agar disaat pemanggilaan atau import tidak perlu menggunakan kurung kurawal
export default HomePage;
