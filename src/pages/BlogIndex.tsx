import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { CallToAction, PageHero, Section } from '../components/ui';
import { sortedPosts } from '../data/blog';
import { absoluteUrl } from '../siteConfig';

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogIndex() {
  const posts = sortedPosts();

  return (
    <>
      <Seo
        title={seoTitle("Towing & Roadside Advice | Auto Lyft USA Ohio")}
        description={seoDescription(
          "Practical advice from the crews who do this every day — accidents, winter batteries, choosing a tow company, and what towing costs in Ohio."
        )}
        path="/blog"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Auto Lyft USA Blog',
            url: absoluteUrl('/blog'),
            blogPost: posts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              datePublished: p.date,
              url: absoluteUrl(`/blog/${p.slug}`),
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Blog"
        title="Advice From the People Who Do This Every Day"
        subtitle="No filler. Just what we have learned from thousands of calls across Columbus, Dayton and Cincinnati."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />

      <Section tint="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-900 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link
                  to={`/blog/${post.slug}`}
                  className="hover:text-red-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readMinutes} min read
                </span>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-semibold text-red-700"
              >
                Read article
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
