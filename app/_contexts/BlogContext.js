"use client";

import { useState, useContext, createContext } from "react";

const BlogContext = createContext();

const BlogProvider = function ({ children }) {
  const [selectBlog, setSelectedBlog] = useState({});

  return (
    <BlogContext.Provider value={(selectBlog, setSelectedBlog)}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlog = function () {
  const context = useContext(BlogContext);

  if (!context) throw new Error("Context was used outside the provider");

  return context;
};

export { BlogProvider, useBlog };
