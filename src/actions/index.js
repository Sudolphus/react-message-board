import * as c from './ActionTypes';


//For Editting Action
export const addTopic = (newTopic) => {
  const { name, id } = newTopic;
  return ({
    type: c.ADD_TOPIC,
    name,
    id
  });
};

export const deleteTopic = (id) => ({
    type: c.DELETE_TOPIC,
    id
  }
);

export const addThread = (newThread) => {
  const {name, topicId, id} = newThread;
  return ({
    type: c.ADD_THREAD,
    name,
    topicId,
    id
  });
}

export const deleteThread = (id) => ({
    type: c.DELETE_THREAD,
    id
  }
);

export const addPost = (newPost) => {
  const { title, body, date, score, id, threadId, topicId } = newPost;
  return ({
    type: c.ADD_POST,
    title,
    body,
    date,
    score,
    id,
    threadId,
    topicId
  });
}

export const deletePost = (id) => ({
  type: c.DELETE_POST,
  id
});

export const vote = (upVote, postId) => ({
  type: c.VOTE,
  up: upVote,
  id: postId
});


//For updating Views
export const viewIndex = () => ({
  type: c.VIEW_INDEX,
  topicId: null,
  threadId: null
});

export const createTopic = () => ({
  type: c.CREATE_TOPIC,
  topicId: null,
  threadId: null
});

export const editTopic = (topicId) => ({
  type: c.EDIT_TOPIC,
  topicId,
  threadId: null
});

export const viewTopic = (topicId) => ({
  type: c.VIEW_TOPIC,
  topicId,
  threadId: null
});

export const viewThread = (topicId, threadId) => ({
  type: c.VIEW_THREAD,
  topicId,
  threadId
});

export const createThread = (topicId) => ({
  type: c.CREATE_THREAD,
  topicId,
  threadId: null
});

export const editThread = (threadId) => ({
  type: c.EDIT_THREAD,
  topicId: null,
  threadId
});

export const createPost = (threadId) => ({
  type: c.CREATE_POST,
  topicId: null,
  threadId
});

export const editPost = (postId) => ({
  type: c.EDIT_POST,
  topicId: null,
  threadId: null,
  postId
});