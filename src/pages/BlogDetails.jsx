import React from "react";
import { useParams, Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import Container from "../components/Container";
import Heading from "../components/Heading";

const blogs = [
  {
    id: 1,
    slug: "study-in-canada-guide",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110a4f5?auto=format&fit=crop&w=800&q=85",
    category: "Study Abroad",
    publishDate: "Jan 15, 2026",
    title: "Top 10 Universities in Australia for International Students",
    excerpt:
      "Explore the leading Australian institutions offering world-class education, vibrant campus life, and strong post-study work opportunities for 2026.",
    content:
      "Australia continues to be one of the most sought-after destinations for international students. In this guide, we explore the top 10 universities in Australia, including the University of Melbourne, Australian National University, and the University of Sydney. We cover admission requirements, scholarship opportunities, campus facilities, and post-study work rights. Whether you are pursuing undergraduate or postgraduate studies, these institutions offer exceptional academic programs and a multicultural environment that prepares you for a global career.",
  },
  {
    id: 2,
    slug: "student-visa-checklist-canada",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3a?auto=format&fit=crop&w=800&q=85",
    category: "Visa Guide",
    publishDate: "Jan 28, 2026",
    title: "Complete Student Visa Checklist for Canada",
    excerpt:
      "Avoid last-minute stress with our comprehensive guide to documents, financial proofs, and interview preparation for Canadian study permits.",
    content:
      "Applying for a Canadian student visa can be overwhelming without proper guidance. Our comprehensive checklist covers every essential document you need, from your letter of acceptance and proof of identity to financial statements and medical examination results. We also walk you through the biometrics process, interview preparation tips, and common pitfalls to avoid. With Dreamway Global's expert assistance, you can navigate the visa process smoothly and focus on preparing for your academic journey in Canada.",
  },
  {
    id: 3,
    slug: "australia-scholarship-guide",
    image:
      "https://images.unsplash.com/photo-1523240794352-9412b514a4a7?auto=format&fit=crop&w=800&q=85",
    category: "Scholarships",
    publishDate: "Feb 05, 2026",
    title: "How to Secure a Full-Ride Scholarship Abroad",
    excerpt:
      "Learn proven strategies from past scholarship recipients on building a standout application, acing interviews, and maximizing funding chances.",
    content:
      "Securing a full-ride scholarship is a life-changing opportunity that requires meticulous planning and a compelling application. In this blog, past scholarship recipients share their personal journeys — from crafting impactful personal statements to preparing for scholarship interviews. We break down the key elements admissions officers look for, including academic excellence, leadership experience, community involvement, and career goals. Start your scholarship journey today with actionable advice from those who have successfully funded their international education.",
  },
  {
    id: 4,
    slug: "post-study-work-rights",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f052?auto=format&fit=crop&w=800&q=85",
    category: "Career",
    publishDate: "Feb 18, 2026",
    title: "Post-Study Work Rights: What You Need to Know",
    excerpt:
      "Understand the latest post-study work visa rules in popular destinations and how to leverage your degree for a successful career abroad.",
    content:
      "Post-study work rights play a crucial role in your decision to study abroad. This article provides an up-to-date overview of post-study work visa regulations in Australia, Canada, the UK, and Germany. Learn about the duration of work permits, eligibility criteria, pathways to permanent residency, and industries with the highest demand for international graduates. With the right information, you can plan your career trajectory from day one and turn your international degree into a stepping stone for global professional success.",
  },
  {
    id: 5,
    slug: "adapting-to-international-student-life",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=85",
    category: "Student Life",
    publishDate: "Mar 02, 2026",
    title: "Adapting to Life as an International Student",
    excerpt:
      "Practical tips on culture shock, making friends, managing finances, and thriving in a new academic environment far from home.",
    content:
      "Moving to a new country for studies is an exciting yet challenging experience. This blog covers essential tips for international students on managing culture shock, building a social network, handling finances, and maintaining a healthy work-life balance. From understanding local customs to finding affordable accommodation and part-time jobs, we provide practical advice that helps you settle in quickly. Remember, the support systems at your university and consultancies like Dreamway Global are there to make your transition as smooth as possible.",
  },
  {
    id: 6,
    slug: "common-application-mistakes",
    image:
      "https://images.unsplash.com/photo-1455390582262-4f3e3b3c3a3f?auto=format&fit=crop&w=800&q=85",
    category: "Application Tips",
    publishDate: "Mar 15, 2026",
    title: "5 Common Mistakes to Avoid in University Applications",
    excerpt:
      "From missing deadlines to weak personal statements — admissions experts share the pitfalls that can hurt your chances and how to avoid them.",
    content:
      "University applications demand attention to detail and strategic planning. Admissions experts at Dreamway Global have identified the five most common mistakes students make: missing deadlines, submitting generic personal statements, overlooking recommendation letter quality, ignoring fit and culture, and failing to proofread. This blog provides actionable advice on how to avoid these pitfalls and present a polished, compelling application that stands out to admissions committees. Start early, seek feedback, and stay organized throughout the process.",
  },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Heading
              text="Blog Not Found"
              className="font-chivo font-bold text-secondary"
            />
            <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
              The blog you are looking for does not exist or has been removed.
            </p>
            <Link
              to="/blogs"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-jost text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FaArrowLeft aria-hidden="true" />
              Back to Blogs
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 font-jost text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FaArrowLeft aria-hidden="true" />
              Back to Blogs
            </Link>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white shadow-[0_14px_35px_rgba(54,69,79,0.08)]">
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-jost text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {blog.category}
                </span>
                <time
                  className="font-jost text-xs font-semibold uppercase tracking-[0.14em] text-secondary/60"
                  dateTime={blog.publishDate}
                >
                  {blog.publishDate}
                </time>
              </div>

              <h1 className="font-chivo text-2xl font-bold text-secondary md:text-3xl lg:text-4xl">
                {blog.title}
              </h1>

              <div className="mt-6 font-jost text-base leading-7 text-secondary/75 md:text-lg">
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default BlogDetails;
