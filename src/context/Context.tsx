import React from 'react';

interface Emprestimo {
    nomeTabela: string,
    numeroParcelas: number,
    valorParcela: number,
}

interface table {
    name: string
}

function mudaState():void {
    const [name, setName] = React.useState<string>()
}

interface PostsContextData {
    emprestimo: Emprestimo[];
    tableMode: table;
    isLoading: boolean;
    fetchPosts: () => void;
    removePost: (postId: number) => void;
    // alteraState: ()=> mudaState()
}



export const postsContextDefaultValue: PostsContextData = {
    emprestimo: [],
    tableMode: { name: "" },
    isLoading: false,
    fetchPosts: () => null,
    removePost: () => null,
    
}

export const PostsContext = React.createContext(postsContextDefaultValue);
// export const PostsContext = React.createContext<PostsContextData>(postsContextDefaultValue);
// <PostsContext.Provider value={postsContextDefaultValue}>{postsContextDefaultValue}</PostsContext.Provider>
// function App(children: any) {
//     return (
//         //   <PostsContext.Provider value={postsContextDefaultValue} >
//         //     {children}
//         //   </PostsContext.Provider>
//         <PostsContext.Provider value={postsContextDefaultValue}>{children}</PostsContext.Provider>
//     );
// }