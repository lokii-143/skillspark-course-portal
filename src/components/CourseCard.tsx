import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    image: string;
    instructor: string;
    duration: string;
    students: number;
    rating: number;
    price: number;
    level: string;
    category: string;
    isEnrolled?: boolean;
    progress?: number;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-card rounded-lg shadow-soft border border-border overflow-hidden hover:shadow-course hover:scale-[1.02] transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {course.level}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge className="bg-gradient-primary text-white">
            {course.category}
          </Badge>
        </div>
        {course.isEnrolled && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <div className="flex items-center justify-between text-white text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1.5 mt-1">
              <div
                className="bg-white rounded-full h-1.5 transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <BookOpen className="h-4 w-4 mr-1" />
          <span className="mr-4">{course.instructor}</span>
          <Star className="h-4 w-4 mr-1 text-warning fill-current" />
          <span>{course.rating}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-primary">
            ${course.price}
          </div>
          <div className="flex space-x-2">
            <Link to={`/course/${course.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
            {course.isEnrolled ? (
              <Link to={`/course/${course.id}`}>
                <Button size="sm">
                  Continue
                </Button>
              </Link>
            ) : (
              <Button size="sm">
                Enroll Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;