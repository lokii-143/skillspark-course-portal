import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Maximize, SkipBack, SkipForward } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
  onClose?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  title, 
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  onClose 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-card rounded-lg shadow-elevated border border-border overflow-hidden">
      <div className="bg-gradient-card p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          )}
        </div>
      </div>
      
      <div className="relative bg-black aspect-video">
        <video
          className="w-full h-full"
          controls
          poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&crop=center"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Custom overlay for demo purposes - only shows when video is not playing */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="text-white text-center">
            <div className="text-lg font-semibold mb-2">Sample Course Video</div>
            <div className="text-sm opacity-80">Use video controls to play</div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-accent/30">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Lesson Duration: 15:30</span>
          <span>HD Quality Available</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;