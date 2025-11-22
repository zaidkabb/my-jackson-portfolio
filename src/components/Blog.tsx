import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FolderOpen, MessageSquare } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Renovating National Gallery",
      category: "Web Design",
      date: "April 14, 2018",
      comments: 4,
      excerpt:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    },
    {
      title: "Wordpress for a Beginner",
      category: "Web Design",
      date: "April 14, 2018",
      comments: 4,
      excerpt:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80",
    },
    {
      title: "Make website from scratch",
      category: "Inspiration",
      date: "April 14, 2018",
      comments: 4,
      excerpt:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Read</p>
          <h2 className="text-4xl md:text-5xl font-bold">Recent Blog</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FolderOpen className="h-3 w-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
