"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BrandToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string | null) => void;

  sortBy: string;
  onSortChange: (value: string | null) => void;
}

export default function BrandToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  sortBy,
  onSortChange,
}: BrandToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search brands..."
          className="pl-10"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={status} onValueChange={(value) => onStatusChange(value)}>
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>

            <SelectItem value="published">Published</SelectItem>

            <SelectItem value="hidden">Hidden</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={(value) => onSortChange(value)}>
          <SelectTrigger className="w-full sm:w-52">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="name">Name (A-Z)</SelectItem>

            <SelectItem value="newest">Newest</SelectItem>

            <SelectItem value="oldest">Oldest</SelectItem>

            <SelectItem value="featured">Featured First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
