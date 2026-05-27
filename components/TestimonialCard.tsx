'use client';

import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, name, location, avatar }: TestimonialCardProps) {
  const avatarUrl =
    avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=18181b&color=fff&size=128`;

  return (
    <div className="group bg-white rounded-xl border border-zinc-100 p-5 flex flex-col gap-4 hover:border-zinc-200 hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.1)] transition-all duration-200 h-full">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[13.5px] text-zinc-600 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-zinc-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarUrl}
          alt={name}
          className="w-9 h-9 rounded-full object-cover ring-1 ring-zinc-100"
        />
        <div>
          <p className="text-[13px] font-semibold text-zinc-900">{name}</p>
          <p className="text-[11px] text-zinc-400 font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
}
