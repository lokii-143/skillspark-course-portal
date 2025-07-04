import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import VideoPlayer from '@/components/VideoPlayer';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Download, 
  Share2,
  Heart,
  Check,
  ChevronRight
} from 'lucide-react';
import webDevImage from '@/assets/course-web-dev.jpg';

const CourseDetails = () => {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<string>('');

  // Mock course data
  const course = {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build 10+ real-world projects and become a full-stack developer.',
    image: webDevImage,
    instructor: {
      name: 'Sarah Johnson',
      title: 'Senior Full Stack Developer',
      bio: 'Sarah is a senior full-stack developer with 8+ years of experience at top tech companies. She has taught over 50,000 students and specializes in modern web technologies.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    duration: '40 hours',
    students: 12500,
    rating: 4.8,
    reviews: 2450,
    price: 89,
    originalPrice: 199,
    level: 'Beginner',
    category: 'Web Development',
    language: 'English',
    lastUpdated: '2024-01-15',
    progress: 35,
    whatYouWillLearn: [
      'Build responsive websites with HTML5 and CSS3',
      'Master JavaScript fundamentals and ES6+ features',
      'Create dynamic web apps with React.js',
      'Build backend APIs with Node.js and Express',
      'Work with databases using MongoDB',
      'Deploy applications to production',
      'Version control with Git and GitHub',
      'Modern development workflow and tools'
    ],
    curriculum: [
      {
        title: 'HTML & CSS Fundamentals',
        lessons: 12,
        duration: '3 hours',
        lessons_list: [
          { title: 'Introduction to HTML', duration: '15 min', completed: true },
          { title: 'HTML Structure and Semantics', duration: '20 min', completed: true },
          { title: 'CSS Basics and Selectors', duration: '18 min', completed: true },
          { title: 'CSS Flexbox Layout', duration: '25 min', completed: false },
          { title: 'CSS Grid System', duration: '22 min', completed: false }
        ]
      },
      {
        title: 'JavaScript Essentials',
        lessons: 18,
        duration: '5 hours',
        lessons_list: [
          { title: 'JavaScript Variables and Data Types', duration: '16 min', completed: false },
          { title: 'Functions and Scope', duration: '20 min', completed: false },
          { title: 'Arrays and Objects', duration: '18 min', completed: false },
          { title: 'DOM Manipulation', duration: '25 min', completed: false },
          { title: 'Event Handling', duration: '22 min', completed: false }
        ]
      },
      {
        title: 'React Development',
        lessons: 15,
        duration: '8 hours',
        lessons_list: [
          { title: 'Introduction to React', duration: '20 min', completed: false },
          { title: 'Components and JSX', duration: '25 min', completed: false },
          { title: 'State and Props', duration: '30 min', completed: false },
          { title: 'Hooks in React', duration: '35 min', completed: false },
          { title: 'Building a React App', duration: '45 min', completed: false }
        ]
      },
      {
        title: 'Backend Development',
        lessons: 20,
        duration: '10 hours',
        lessons_list: [
          { title: 'Node.js Fundamentals', duration: '25 min', completed: false },
          { title: 'Express.js Framework', duration: '30 min', completed: false },
          { title: 'RESTful APIs', duration: '35 min', completed: false },
          { title: 'Database Integration', duration: '40 min', completed: false },
          { title: 'Authentication & Security', duration: '45 min', completed: false }
        ]
      }
    ],
    requirements: [
      'Basic computer literacy',
      'No prior programming experience required',
      'A computer with internet connection',
      'Willingness to learn and practice'
    ],
    features: [
      '40 hours of video content',
      '10+ hands-on projects',
      'Lifetime access',
      'Certificate of completion',
      'Downloadable resources',
      'Community access'
    ]
  };

  const completedLessons = course.curriculum.reduce((total, section) => {
    return total + section.lessons_list.filter(lesson => lesson.completed).length;
  }, 0);

  const totalLessons = course.curriculum.reduce((total, section) => {
    return total + section.lessons_list.length;
  }, 0);

  const handlePlayLesson = (lessonTitle: string) => {
    setSelectedLesson(lessonTitle);
    setShowVideoPlayer(true);
  };

  const handlePreviewCourse = () => {
    setSelectedLesson('Course Preview');
    setShowVideoPlayer(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Badge className="bg-gradient-primary text-white">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-warning fill-current mr-1" />
                  <span className="font-semibold mr-1">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{course.instructor.name}</div>
                  <div className="text-sm text-muted-foreground">{course.instructor.title}</div>
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-card rounded-lg shadow-course border border-border overflow-hidden">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                      onClick={handlePreviewCourse}
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Preview Course
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-foreground">${course.price}</span>
                      <span className="text-lg text-muted-foreground line-through ml-2">${course.originalPrice}</span>
                    </div>
                    <Badge className="bg-success text-white">55% OFF</Badge>
                  </div>

                  {isEnrolled ? (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Course Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground mt-1">
                          {completedLessons} of {totalLessons} lessons completed
                        </div>
                      </div>
                      <Button className="w-full" size="lg">
                        Continue Learning
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => setIsEnrolled(true)}
                      >
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        Add to Wishlist
                        <Heart className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-border">
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  <div className="mt-6 space-y-2">
                    <h4 className="font-semibold text-foreground">This course includes:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:pr-80">
          {/* Video Player */}
          {showVideoPlayer && (
            <div className="mb-8">
              <VideoPlayer 
                title={selectedLesson}
                onClose={() => setShowVideoPlayer(false)}
              />
            </div>
          )}
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Course Description</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    This comprehensive web development bootcamp is designed to take you from complete beginner to job-ready full-stack developer. You'll learn the most in-demand technologies and build real-world projects that you can showcase in your portfolio.
                  </p>
                  <p>
                    The course covers both frontend and backend development, giving you the skills to build complete web applications. You'll start with the fundamentals of HTML and CSS, then progress to JavaScript, React, and finally backend development with Node.js.
                  </p>
                  <p>
                    Each section includes hands-on projects that reinforce what you've learned. By the end of the course, you'll have built over 10 different projects, including a personal portfolio, e-commerce site, and full-stack web application.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Course Curriculum</h3>
                <div className="space-y-4">
                  {course.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-card rounded-lg border border-border overflow-hidden">
                      <div className="bg-accent/50 p-4 border-b border-border">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-foreground">{section.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{section.lessons} lessons</span>
                            <span>{section.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="divide-y divide-border">
                        {section.lessons_list.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="p-4 hover:bg-accent/30 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                {lesson.completed ? (
                                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                                    <Check className="h-4 w-4 text-white" />
                                  </div>
                                ) : isEnrolled ? (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-6 h-6 p-0"
                                    onClick={() => handlePlayLesson(lesson.title)}
                                  >
                                    <Play className="h-4 w-4" />
                                  </Button>
                                ) : (
                                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                                    <Play className="h-3 w-3 text-muted-foreground" />
                                  </div>
                                )}
                                <span className={`font-medium ${lesson.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">About the Instructor</h3>
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex items-start space-x-6">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{course.instructor.name}</h4>
                      <p className="text-lg text-primary mb-4">{course.instructor.title}</p>
                      <p className="text-muted-foreground leading-relaxed">{course.instructor.bio}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">50K+</div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">15</div>
                          <div className="text-sm text-muted-foreground">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">4.9</div>
                          <div className="text-sm text-muted-foreground">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">8+</div>
                          <div className="text-sm text-muted-foreground">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Student Reviews</h3>
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border mb-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-foreground mb-2">{course.rating}</div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-warning fill-current" />
                        ))}
                      </div>
                      <div className="text-muted-foreground">{course.reviews} reviews</div>
                    </div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center space-x-3">
                          <span className="text-sm w-4">{stars}</span>
                          <Star className="h-4 w-4 text-warning fill-current" />
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-warning rounded-full h-2"
                              style={{ width: `${stars === 5 ? 85 : stars === 4 ? 12 : 3}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-4">
                  {[
                    {
                      name: 'Alex Thompson',
                      rating: 5,
                      date: '2 weeks ago',
                      comment: 'Outstanding course! Sarah explains complex concepts in a very clear and understandable way. The projects are practical and really help reinforce the learning.'
                    },
                    {
                      name: 'Maria Garcia',
                      rating: 5,
                      date: '1 month ago',
                      comment: 'I went from knowing nothing about web development to building my own projects. The curriculum is well-structured and the instructor is very supportive.'
                    },
                    {
                      name: 'James Wilson',
                      rating: 4,
                      date: '2 months ago',
                      comment: 'Great course overall. Covers all the essential topics for web development. Would recommend to anyone starting their coding journey.'
                    }
                  ].map((review, index) => (
                    <div key={index} className="bg-card rounded-lg p-6 shadow-soft border border-border">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                          {review.name[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-semibold text-foreground">{review.name}</span>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-warning fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;