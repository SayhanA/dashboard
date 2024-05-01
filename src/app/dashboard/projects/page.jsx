"use client";

import { fetchPosts } from "@/app/api/data";
import React from "react";
import { useQuery } from "react-query";

const Projects = () => {
  
  const { data, isLoading, error } = useQuery('posts', fetchPosts);
  console.log("data:", data);
  
  return <div>Projects</div>;
};

export default Projects;
