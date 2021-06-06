/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      username
      comments {
        id
        body
        timelineitemID
        createdAt
        updatedAt
        author {
          id
          username
          profilepic
          email
          address
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      username
      comments {
        id
        body
        timelineitemID
        createdAt
        updatedAt
        author {
          id
          username
          profilepic
          email
          address
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      username
      comments {
        id
        body
        timelineitemID
        createdAt
        updatedAt
        author {
          id
          username
          profilepic
          email
          address
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTimelineItem = /* GraphQL */ `
  mutation CreateTimelineItem(
    $input: CreateTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    createTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      createdAt
      updatedAt
      comments {
        items {
          id
          body
          timelineitemID
          createdAt
          updatedAt
        }
        nextToken
      }
      content {
        id
        source
        type
        createdAt
        updatedAt
      }
      author {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateTimelineItem = /* GraphQL */ `
  mutation UpdateTimelineItem(
    $input: UpdateTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    updateTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      createdAt
      updatedAt
      comments {
        items {
          id
          body
          timelineitemID
          createdAt
          updatedAt
        }
        nextToken
      }
      content {
        id
        source
        type
        createdAt
        updatedAt
      }
      author {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteTimelineItem = /* GraphQL */ `
  mutation DeleteTimelineItem(
    $input: DeleteTimelineItemInput!
    $condition: ModelTimelineItemConditionInput
  ) {
    deleteTimelineItem(input: $input, condition: $condition) {
      id
      description
      postTime
      createdAt
      updatedAt
      comments {
        items {
          id
          body
          timelineitemID
          createdAt
          updatedAt
        }
        nextToken
      }
      content {
        id
        source
        type
        createdAt
        updatedAt
      }
      author {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      body
      timelineitemID
      createdAt
      updatedAt
      author {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      body
      timelineitemID
      createdAt
      updatedAt
      author {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      body
      timelineitemID
      createdAt
      updatedAt
      author {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      profilepic
      email
      address
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      profilepic
      email
      address
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      profilepic
      email
      address
      createdAt
      updatedAt
    }
  }
`;
