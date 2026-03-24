import type { Metadata } from "next";
async function getPost(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {

  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,

    alternates: {
      canonical: `https://yourdomain.com/products/${id}`,
    },

    openGraph: {
      title: post.title,
      description: post.body,
      url: `https://yourdomain.com/products/${id}`,
      siteName: "SendGrow",
      images: [
        {
          url: "https://yourdomain.com/assets/images/og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // 🔥 IMPORTANT FIX

  const product = await getPost(id);

  return (
    <div className="pageWrapper">

      {/* 🔹 Hero */}
      <section className="pt-24 bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* 🖼️ Image */}
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full rounded-xl shadow"
            />

            {/* Gallery */}
            <div className="flex gap-3 mt-4">
              {product.images?.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img} data-fancybox data-src={img}
                  className="w-16 h-16 object-cover rounded border"
                />
              ))}
            </div>
          </div>

          {/* 📄 Details */}
          <div>

            <h2 className="text-2xl font-semibold mb-2">
              {product.title}
            </h2>

            <p className="text-gray-500 mb-2">
              {product.brand} • {product.category}
            </p>

            <p className="text-lg font-bold text-blue-600 mb-2">
              ₹ {product.price}
              <span className="text-sm text-gray-500 ml-2">
                ({product.discountPercentage}% OFF)
              </span>
            </p>

            <p className="text-yellow-500 mb-2">
              ⭐ {product.rating}
            </p>

            <p className="text-sm text-green-600 mb-4">
              {product.availabilityStatus} ({product.stock} left)
            </p>

            <p className="text-gray-700 mb-6">
              {product.description}
            </p>

            <button className="px-6 py-3 bg-black text-white rounded-lg">
              Buy Now
            </button>

            {/* 🔹 Extra Info */}
            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <p><b>SKU:</b> {product.sku}</p>
              <p><b>Weight:</b> {product.weight}g</p>
              <p><b>Warranty:</b> {product.warrantyInformation}</p>
              <p><b>Shipping:</b> {product.shippingInformation}</p>
            </div>

          </div>

        </div>
      </section>

      {/* 🔹 Specs */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">

          <h3 className="text-xl font-semibold mb-4">Specifications</h3>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><b>Width:</b> {product.dimensions?.width}</p>
            <p><b>Height:</b> {product.dimensions?.height}</p>
            <p><b>Depth:</b> {product.dimensions?.depth}</p>
            <p><b>Min Order:</b> {product.minimumOrderQuantity}</p>
          </div>

        </div>
      </section>

      {/* 🔹 Reviews */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">

          <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>

          <div className="space-y-4">
            {product.reviews?.map((review: any, i: number) => (
              <div key={i} className="border p-4 rounded-lg">
                <p className="font-semibold">{review.reviewerName}</p>
                <p className="text-yellow-500">⭐ {review.rating}</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔹 Back */}
      <div className="text-center pb-10">
        <a href="/allproducts" className="text-blue-600">
          ← Back to Products
        </a>
      </div>

    </div>
  );
}