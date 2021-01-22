import React from 'react';

interface Post {
    name: string
}

interface table {
    name: string
}

const [name, setName] = React.useState()

interface PostsContextData {
    posts: Post[];
    tableMode: table;
    isLoading: boolean;
    fetchPosts: () => void;
    removePost: (postId: number) => void;

}



export const postsContextDefaultValue: PostsContextData = {
    posts: [],
    tableMode: { name: "" },
    isLoading: false,
    fetchPosts: () => null,
    removePost: () => null,
  
}

export const PostsContext = React.createContext<PostsContextData>(postsContextDefaultValue);

// function App(children: any) {
//     return (
//         //   <PostsContext.Provider value={postsContextDefaultValue} >
//         //     {children}
//         //   </PostsContext.Provider>
//         <PostsContext.Provider value={postsContextDefaultValue}>{children}</PostsContext.Provider>
//     );
// }