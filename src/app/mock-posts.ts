import { Post } from './post.model';
import { NewPostComponent } from './newpost/newpost.component';

export let POSTS: Post[] = [
  new Post('Best Beer', '12/12/17', 'blah blah blah blah', 'Hansen', 'https://www.youtube.com/watch?v=PMotykw0SIk&feature=youtu.be&t=1282', 1),
  new Post('Something Else', '11/12/15', 'abc abc abc abc', 'John', 'http://edition.cnn.com/2016/01/25/us/dog-runs-half-marathon/', 2),
];
