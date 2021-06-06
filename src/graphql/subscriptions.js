/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($username: String) {
    onUpdatePost(username: $username) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($username: String) {
    onDeletePost(username: $username) {
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
export const onCreateTimelineItem = /* GraphQL */ `
  subscription OnCreateTimelineItem {
    onCreateTimelineItem {
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
export const onUpdateTimelineItem = /* GraphQL */ `
  subscription OnUpdateTimelineItem {
    onUpdateTimelineItem {
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
export const onDeleteTimelineItem = /* GraphQL */ `
  subscription OnDeleteTimelineItem {
    onDeleteTimelineItem {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent {
    onCreateContent {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent {
    onUpdateContent {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent {
    onDeleteContent {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
