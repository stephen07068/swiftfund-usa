'use client';

import { Star } from 'lucide-react';
import Card from './Card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, name, location, avatar }: TestimonialCardProps) {
  const avatarUrl = avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=16a34a&color=fff&size=128`;
  
  return (
    <Card hover className="h-full">
      <div className="flex items-center gap-4 mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={avatarUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
    </Card>
  );
}
