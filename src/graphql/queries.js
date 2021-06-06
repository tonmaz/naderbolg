/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($postId: ID) {
    getMessage(postId: $postId) {
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
export const sellerData = /* GraphQL */ `
  query SellerData {
    sellerData
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByUsername = /* GraphQL */ `
  query PostsByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimelineItem = /* GraphQL */ `
  query GetTimelineItem($id: ID!) {
    getTimelineItem(id: $id) {
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
export const listTimelineItems = /* GraphQL */ `
  query ListTimelineItems(
    $filter: ModelTimelineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimelineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        postTime
        createdAt
        updatedAt
        comments {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      source
      type
      createdAt
      updatedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        source
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        profilepic
        email
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
