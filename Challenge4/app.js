const blogApp = (function() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
  
    const displayError = (error) => {
      const errorDiv = document.getElementById('error');
      errorDiv.textContent = `Error: ${error.message}`;
    };
  
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const posts = await response.json();
        displayPosts(posts);
      } catch (error) {
        displayError(error);
      }
    };
  
    const displayPosts = (posts) => {
      const postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = '';
      posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.textContent = `${post.title} - ${post.body}`;
        postsDiv.appendChild(postElement);
      });
    };
  
    const fetchTodos = async () => {
      try {
        const response = await fetch(`${BASE_URL}/todos`);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const todos = await response.json();
        displayTodos(todos);
      } catch (error) {
        displayError(error);
      }
    };
  
    const displayTodos = (todos) => {
      const todosDiv = document.getElementById('todos');
      todosDiv.innerHTML = '';
      todos.forEach((todo) => {
        const todoElement = document.createElement('div');
        todoElement.textContent = `${todo.title} - ${todo.completed}`;
        todosDiv.appendChild(todoElement);
      });
    };
  
    const init = () => {
      fetchPosts();
      fetchTodos();
    };
  
    return {
      init,
    };
  })();
  
  blogApp.init();