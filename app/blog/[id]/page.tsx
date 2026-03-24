import type { Metadata } from "next";
async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
      canonical: `https://yourdomain.com/blog/${id}`,
    },

    openGraph: {
      title: post.title,
      description: post.body,
      url: `https://yourdomain.com/blog/${id}`,
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

  const post = await getPost(id);

  return (
    <div className="pageWrapper">
      <section className="pt-24 min-h-[300px] flex items-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">{post.title}</h1>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4">


          <p className="text-gray-700 leading-relaxed">
            {post.body}
          </p>

          <a
            href="/blog"
            className="inline-block mt-6 text-blue-600"
          >
            ← Back to Blog
          </a>

        </div>
      </section>
    </div>
  );
}