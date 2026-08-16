import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { CallToAction, Section } from '../components/ui';
import { Breadcrumbs } from '../components/ui';
import { getPost, sortedPosts } from '../data/blog';
import { absoluteUrl, siteConfig } from '../siteConfig';
import { formatDate } from './BlogIndex';
import NotFound from './NotFound';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const others = sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={`${post.title} | Auto Lyft USA`}
        description={post.excerpt}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            url: absoluteUrl(path),
            author: { '@type': 'Organization', name: post.author },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.name,
              url: siteConfig.origin,
            },
            mainEntityOfPage: absoluteUrl(path),
          },
        ]}
      />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path },
            ]}
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>

          {post.body.map((block, i) => {
            if ('h2' in block) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-10 mb-4"
                >
                  {block.h2}
                </h2>
              );
            }
            if ('ul' in block) {
              return (
                <ul key={i} className="space-y-2 mb-6 ml-1">
                  {block.ul.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-700 rounded-full flex-shrink-0 mt-2.5" />
                      <span className="text-lg text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-lg text-gray-600 mb-6 leading-relaxed">
                {block.p}
              </p>
            );
          })}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <Section tint="gray" title="More From the Blog">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((other) => (
            <Link
              key={other.slug}
              to={`/blog/${other.slug}`}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2 hover:text-red-700 transition-colors">
                {other.title}
              </h3>
              <p className="text-sm text-gray-600">{other.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
