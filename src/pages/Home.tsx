import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CourseCard from '@/components/CourseCard';
import { ArrowRight, BookOpen, Users, Star, Award } from 'lucide-react';
import heroImage from '@/assets/hero-learning.jpg';
import webDevImage from '@/assets/course-web-dev.jpg';
import dataScienceImage from '@/assets/course-data-science.jpg';
import uiUxImage from '@/assets/course-ui-ux.jpg';
import marketingImage from '@/assets/course-marketing.jpg';

const Home = () => {
  const featuredCourses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build 10+ real-world projects.',
      image: webDevImage,
      instructor: 'Sarah Johnson',
      duration: '40 hours',
      students: 12500,
      rating: 4.8,
      price: 89,
      level: 'Beginner',
      category: 'Web Development'
    },
    {
      id: '2',
      title: 'Data Science & Machine Learning',
      description: 'Master Python, pandas, scikit-learn, and TensorFlow. Analyze data and build ML models.',
      image: dataScienceImage,
      instructor: 'Dr. Michael Chen',
      duration: '60 hours',
      students: 8200,
      rating: 4.9,
      price: 129,
      level: 'Intermediate',
      category: 'Data Science'
    },
    {
      id: '3',
      title: 'UI/UX Design Masterclass',
      description: 'Create beautiful, user-friendly designs. Learn Figma, design principles, and user research.',
      image: uiUxImage,
      instructor: 'Emma Wilson',
      duration: '35 hours',
      students: 6800,
      rating: 4.7,
      price: 79,
      level: 'Beginner',
      category: 'Design'
    },
    {
      id: '4',
      title: 'Digital Marketing Strategy',
      description: 'Build comprehensive marketing campaigns. SEO, social media, email marketing, and analytics.',
      image: marketingImage,
      instructor: 'David Rodriguez',
      duration: '25 hours',
      students: 9500,
      rating: 4.6,
      price: 69,
      level: 'Beginner',
      category: 'Marketing'
    }
  ];

  const stats = [
    { icon: BookOpen, label: 'Courses', value: '1,200+' },
    { icon: Users, label: 'Students', value: '100K+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
    { icon: Award, label: 'Certificates', value: '50K+' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Learn Without
                <span className="block text-secondary-light">Limits</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Discover thousands of courses from expert instructors. Build skills, 
                advance your career, and achieve your learning goals with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button variant="hero" size="lg" className="group">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Students learning online"
                className="rounded-lg shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-course">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-secondary text-white mb-4">Featured Courses</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular Courses This Month
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their careers with these top-rated courses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="group">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-card py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our community of learners and start building skills that matter. 
            Get access to expert instructors, interactive lessons, and career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button variant="hero" size="lg">
                Get Started Today
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;