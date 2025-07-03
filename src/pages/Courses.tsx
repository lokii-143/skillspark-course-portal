import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CourseCard from '@/components/CourseCard';
import { Search, Filter, Grid, List } from 'lucide-react';
import webDevImage from '@/assets/course-web-dev.jpg';
import dataScienceImage from '@/assets/course-data-science.jpg';
import uiUxImage from '@/assets/course-ui-ux.jpg';
import marketingImage from '@/assets/course-marketing.jpg';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allCourses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build 10+ real-world projects and become a full-stack developer.',
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
      description: 'Master Python, pandas, scikit-learn, and TensorFlow. Analyze data, build predictive models, and become a data scientist.',
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
      description: 'Create beautiful, user-friendly designs. Learn Figma, design principles, user research, and prototyping.',
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
      description: 'Build comprehensive marketing campaigns. Master SEO, social media marketing, email campaigns, and analytics.',
      image: marketingImage,
      instructor: 'David Rodriguez',
      duration: '25 hours',
      students: 9500,
      rating: 4.6,
      price: 69,
      level: 'Beginner',
      category: 'Marketing'
    },
    {
      id: '5',
      title: 'Advanced React Development',
      description: 'Deep dive into React hooks, context, performance optimization, testing, and modern React patterns.',
      image: webDevImage,
      instructor: 'Alex Thompson',
      duration: '30 hours',
      students: 5200,
      rating: 4.8,
      price: 99,
      level: 'Advanced',
      category: 'Web Development'
    },
    {
      id: '6',
      title: 'Python for Data Analysis',
      description: 'Learn Python fundamentals and data analysis with pandas, NumPy, and matplotlib. Perfect for beginners.',
      image: dataScienceImage,
      instructor: 'Lisa Chang',
      duration: '28 hours',
      students: 7100,
      rating: 4.7,
      price: 79,
      level: 'Beginner',
      category: 'Data Science'
    }
  ];

  const categories = ['all', 'Web Development', 'Data Science', 'Design', 'Marketing'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">All Courses</h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete catalog of courses and find the perfect learning path for you.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-lg p-6 shadow-soft border border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Search Courses</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Level</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <div className="flex items-center space-x-4">
              <Badge variant="outline">{sortedCourses.length} courses found</Badge>
              {(searchTerm || selectedCategory !== 'all' || selectedLevel !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {sortedCourses.map((course, index) => (
            <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find more courses.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;