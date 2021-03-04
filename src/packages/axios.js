import axios from "axios";
export default axios.create({
    baseURL: 'https://nest-blog-app.wilsonpc.repl.co/',
    headers: {'X-Custom-Header': 'foobar'}
  });