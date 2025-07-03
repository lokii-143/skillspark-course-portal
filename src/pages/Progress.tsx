import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target, 
  TrendingUp,
  Calendar,
  Play,
  CheckCircle,
  Award,
  BarChart3
} from 'lucide-react';
import webDevImage from '@/assets/course-web-dev.jpg';
import dataScienceImage from '@/assets/course-data-science.jpg';
import uiUxImage from '@/assets/course-ui-ux.jpg';

const ProgressDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const enrolledCourses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      image: webDevImage,
      instructor: 'Sarah Johnson',
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      totalDuration: '40 hours',
      timeSpent: '26 hours',
      lastAccessed: '2 hours ago',
      nextLesson: 'React Hooks Deep Dive',
      category: 'Web Development',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Data Science & Machine Learning',
      image: dataScienceImage,
      instructor: 'Dr. Michael Chen',
      progress: 30,
      totalLessons: 52,
      completedLessons: 16,
      totalDuration: '60 hours',
      timeSpent: '18 hours',
      lastAccessed: '1 day ago',
      nextLesson: 'Introduction to Pandas',
      category: 'Data Science',
      isCompleted: false
    },
    {
      id: '3',
      title: 'UI/UX Design Masterclass',
      image: uiUxImage,
      instructor: 'Emma Wilson',
      progress: 100,
      totalLessons: 28,
      completedLessons: 28,
      totalDuration: '35 hours',
      timeSpent: '35 hours',
      lastAccessed: '1 week ago',
      nextLesson: 'Course Completed!',
      category: 'Design',
      isCompleted: true
    }
  ];

  const achievements = [
    {
      title: 'First Course Completed',
      description: 'Completed your first course',
      icon: Trophy,
      earned: true,
      date: '2024-01-15'
    },
    {
      title: 'Speed Learner',
      description: 'Completed 5 lessons in one day',
      icon: Target,
      earned: true,
      date: '2024-01-10'
    },
    {
      title: 'Consistent Learner',
      description: 'Learned for 7 days straight',
      icon: TrendingUp,
      earned: true,
      date: '2024-01-08'
    },
    {
      title: 'Knowledge Seeker',
      description: 'Enrolled in 5 courses',
      icon: BookOpen,
      earned: false,
      date: null
    },
    {
      title: 'Course Master',
      description: 'Complete 10 courses',
      icon: Award,
      earned: false,
      date: null
    }
  ];

  const weeklyStats = {
    totalHours: 12,
    lessonsCompleted: 8,
    coursesActive: 2,
    streakDays: 5,
    weeklyGoal: 15,
    completionRate: 80
  };

  const monthlyProgress = [
    { week: 'Week 1', hours: 8 },
    { week: 'Week 2', hours: 12 },
    { week: 'Week 3', hours: 15 },
    { week: 'Week 4', hours: 12 }
  ];

  const completedCourses = enrolledCourses.filter(course => course.isCompleted);
  const activeCourses = enrolledCourses.filter(course => !course.isCompleted);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Learning Progress</h1>
          <p className="text-xl text-muted-foreground">
            Track your learning journey and celebrate your achievements.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-primary rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-sm">This Week</p>
                <p className="text-3xl font-bold">{weeklyStats.totalHours}h</p>
                <p className="text-primary-foreground/80 text-sm">of {weeklyStats.weeklyGoal}h goal</p>
              </div>
              <Clock className="h-8 w-8 text-primary-foreground/80" />
            </div>
            <Progress 
              value={(weeklyStats.totalHours / weeklyStats.weeklyGoal) * 100} 
              className="mt-3 bg-primary-foreground/20"
            />
          </div>

          <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Lessons Completed</p>
                <p className="text-3xl font-bold text-foreground">{weeklyStats.lessonsCompleted}</p>
                <p className="text-success text-sm font-medium">This week</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Courses</p>
                <p className="text-3xl font-bold text-foreground">{weeklyStats.coursesActive}</p>
                <p className="text-primary text-sm font-medium">In progress</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Learning Streak</p>
                <p className="text-3xl font-bold text-foreground">{weeklyStats.streakDays}</p>
                <p className="text-warning text-sm font-medium">Days in a row</p>
              </div>
              <Target className="h-8 w-8 text-warning" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-8">
            {/* Continue Learning */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Continue Learning</h2>
              <div className="grid gap-6">
                {activeCourses.map((course) => (
                  <div key={course.id} className="bg-card rounded-lg shadow-soft border border-border overflow-hidden hover:shadow-course transition-all duration-200">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 h-32 md:h-auto">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <Badge className="bg-gradient-secondary text-white mb-2">{course.category}</Badge>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                            <p className="text-muted-foreground text-sm">by {course.instructor}</p>
                          </div>
                          <div className="text-right mt-4 md:mt-0">
                            <div className="text-2xl font-bold text-primary">{course.progress}%</div>
                            <div className="text-sm text-muted-foreground">Complete</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <Progress value={course.progress} className="h-2" />
                          <div className="flex justify-between text-sm text-muted-foreground mt-2">
                            <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                            <span>{course.timeSpent} of {course.totalDuration}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div className="text-sm text-muted-foreground mb-3 sm:mb-0">
                            <span>Next: {course.nextLesson}</span>
                            <br />
                            <span>Last accessed: {course.lastAccessed}</span>
                          </div>
                          <Link to={`/course/${course.id}`}>
                            <Button className="group">
                              <Play className="h-4 w-4 mr-2" />
                              Continue Learning
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Courses */}
            {completedCourses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Completed Courses</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedCourses.map((course) => (
                    <div key={course.id} className="bg-card rounded-lg shadow-soft border border-border overflow-hidden">
                      <div className="relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-success text-white">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Completed
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{course.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">by {course.instructor}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span>{course.totalDuration} completed</span>
                          <span>{course.totalLessons} lessons</span>
                        </div>
                        <div className="flex space-x-2">
                          <Link to={`/course/${course.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">
                              Review Course
                            </Button>
                          </Link>
                          <Button variant="outline" size="icon">
                            <Award className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Your Achievements</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`bg-card rounded-lg p-6 shadow-soft border border-border transition-all duration-200 ${
                    achievement.earned ? 'hover:shadow-course' : 'opacity-60'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        achievement.earned 
                          ? 'bg-gradient-primary text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {achievement.description}
                        </p>
                        {achievement.earned ? (
                          <Badge className="bg-success text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Earned {achievement.date}
                          </Badge>
                        ) : (
                          <Badge variant="outline">Not earned yet</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Learning Analytics</h2>
              
              {/* Monthly Progress Chart */}
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Weekly Learning Hours</h3>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">This Month</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {monthlyProgress.map((week, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 text-sm text-muted-foreground">{week.week}</div>
                      <div className="flex-1 bg-muted rounded-full h-3">
                        <div
                          className="bg-gradient-primary rounded-full h-3 transition-all duration-300"
                          style={{ width: `${(week.hours / 20) * 100}%` }}
                        />
                      </div>
                      <div className="w-12 text-sm font-medium text-foreground text-right">
                        {week.hours}h
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">Completion Rate</h4>
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{weeklyStats.completionRate}%</div>
                  <Progress value={weeklyStats.completionRate} className="mb-2" />
                  <p className="text-sm text-muted-foreground">Average across all courses</p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">Total Learning Time</h4>
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">79h</div>
                  <p className="text-sm text-muted-foreground">+12h this week</p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">Certificates Earned</h4>
                    <Award className="h-5 w-5 text-warning" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">1</div>
                  <p className="text-sm text-muted-foreground">UI/UX Design Masterclass</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProgressDashboard;